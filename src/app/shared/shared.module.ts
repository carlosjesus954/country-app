import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';

@NgModule({
  declarations: [
    SideBarComponent,
    SearchBoxComponent,
    LoadingSpinerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SideBarComponent,
    SearchBoxComponent,
    LoadingSpinerComponent,

  ],
})
export class SharedModule {}
