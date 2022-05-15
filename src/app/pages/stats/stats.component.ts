import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {

    // const docRef = doc(this.firestore, "donors", "/");
    // const docSnap = getDoc(docRef);

    // console.log(getDoc(docRef))

    // console.log(doc(this.firestore, "cities", "SF"))
    // this.items = 
    // console.log()
    // db.collection("camp details").valueChanges().subscribe(res => {
    //   console.log(res)
    // });

    this.items = db.list('donors').valueChanges();

  }

  ngOnInit(): void {
    // this.items = this.db.list('items').valueChanges();
  }

}
