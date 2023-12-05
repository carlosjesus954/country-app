import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SideBarComponent,
    AboutPageComponent,
    ContactPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomePageComponent,
    SideBarComponent,
    AboutPageComponent,
    ContactPageComponent,
  ],
})
export class SharedModule {}
