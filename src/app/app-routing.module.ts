import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { NotfoundComponent } from './notfound/notfound.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: "Home" }, },
  { path: 'about', component: AboutComponent, data: { title: "About" }, },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent, data: { title: "404" }, }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { bindToComponentInputs: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
