import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { SidebarBottomComponent } from './sidebar-bottom/sidebar-bottom.component';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, SidebarBottomComponent],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SidebarBottomComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }
