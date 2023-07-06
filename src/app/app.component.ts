import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from './drawer/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private drawerService: DrawerService) {}

  public drawerEmitter!: MatDrawer;

  onMenu() {
    this.drawerEmitter = this.drawerService.getDrawerEmitter();
    this.drawerEmitter.toggle();
  }
}
