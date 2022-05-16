import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  postForm = new FormGroup({
    Name: new FormControl(''),
    Division: new FormControl(''),
    BloodGroup: new FormControl(''),
    Date: new FormControl(''),
    Time: new FormControl(''),
    Address: new FormControl(''),
    Contact: new FormControl('')
  });

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  onSave() {
    const tutorialsRef = this.db.list('posts');
    tutorialsRef.push(this.postForm.value);

  }

  saveBtnEnabled() {
    return true;
  }
}
