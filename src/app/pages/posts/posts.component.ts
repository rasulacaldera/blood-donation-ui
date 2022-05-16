import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.posts = db.list('posts').valueChanges();
  }

  ngOnInit(): void {
  }

}
