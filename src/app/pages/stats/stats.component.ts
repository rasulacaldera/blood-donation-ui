import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  donors: Observable<any[]>;
  posts: Observable<any[]>;

  test: any[] = []
  test2: any[] = []

  constructor(db: AngularFireDatabase) {
    this.donors = db.list('donors').valueChanges();
    this.posts = db.list('posts').valueChanges();

    this.donors.subscribe(res => {

      this.test = [];
      this.test2 = []

      res.map(arr => {
        this.test[this.test.length] = Object.values(arr)
      });

      var merged = [].concat.apply([], this.test);

      merged.map(it => {
        this.test2[this.test2.length] = Object.values(it)
      })



      var merged2 = [].concat.apply([], this.test2);

      console.log(merged2)

      // console.log(Object.values(merged));
      // console.log(Object.keys(merged));
      // console.log(this.test)
    })
  }

  ngOnInit(): void { }

}
