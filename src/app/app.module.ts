import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DrawerComponent } from './drawer/drawer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    DrawerComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
