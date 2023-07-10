import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})

export class ToolbarComponent {
  constructor(private toolbarService: ToolbarService, private changeDetector: ChangeDetectorRef) { }

  public title!: string;

  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }

  ngAfterViewInit(): void {
    this.toolbarService.getObserverTitle().subscribe(title => {
      this.title = title;
      this.changeDetector.detectChanges();
    });
  }
}
