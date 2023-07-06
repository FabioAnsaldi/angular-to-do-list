import { Component, Input } from '@angular/core';
import { ToolbarService } from '../toolbar/toolbar.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  constructor(private toolbarService: ToolbarService) { }

  @Input() title!: string;  // from Route module

  ngOnInit() {
    this.toolbarService.updateTitle(this.title);
  }
}
