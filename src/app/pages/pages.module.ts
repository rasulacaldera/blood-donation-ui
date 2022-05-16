import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { PostsComponent } from './posts/posts.component';
import { PostShowComponent } from './posts/post-show/post-show.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    StatsComponent,
    PostsComponent,
    PostShowComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
