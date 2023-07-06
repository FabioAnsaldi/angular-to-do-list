import { Component, Input } from '@angular/core';
import { ToolbarService } from '../toolbar/toolbar.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  constructor(private toolbarService: ToolbarService) { }

  @Input() title!: string;  // from Route module

  ngOnInit() {
    this.toolbarService.updateTitle(this.title);
  }
}
