import { Component, ViewChild, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from './drawer.service';
import { AppRoutingModule } from '../app-routing.module';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatListModule, AppRoutingModule],
})

export class DrawerComponent {
  constructor(private drawerService: DrawerService) {}

  public appTitle: string = 'angular-to-do-list';

  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

  ngOnInit() {
    this.drawerService.setDrawerEmitter(this.drawer);
  }
}
