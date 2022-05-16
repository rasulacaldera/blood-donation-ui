import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    HomeComponent,
    StatsComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
