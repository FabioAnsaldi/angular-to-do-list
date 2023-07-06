import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})

export class DrawerService {

  private drawerEmitter!: MatDrawer;

  public setDrawerEmitter(emitter: MatDrawer) {
    this.drawerEmitter = emitter;
  }

  public getDrawerEmitter() {
    return this.drawerEmitter;
  }
}
