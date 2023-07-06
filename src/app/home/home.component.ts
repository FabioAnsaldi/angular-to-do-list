import { Component, Input } from '@angular/core';
import { ToolbarService } from '../toolbar/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private toolbarService: ToolbarService) { }

  @Input() title!: string;  // from Route module

  ngOnInit() {
    this.toolbarService.updateTitle(this.title);
  }
}
