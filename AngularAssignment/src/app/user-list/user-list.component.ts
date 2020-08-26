import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [
    new User('Joey', 'Anderson', 'j.andrsn@gmail.com', true),
    new User('mat', 'Pattrick', 'm.pat@gmail.com', true),
    new User('Ron', 'Gelly', 'r.gel@gmail.com', true),
    new User('Rach', 'Green', 'r.green@gmail.com', true),
    new User('Phill', 'Richard', 'p.rich@gmail.com', true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
