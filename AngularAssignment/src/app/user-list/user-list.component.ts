import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any = [
    new User('Joey', 'Anderson', 'j.andrsn@gmail.com', true),
    new User('Mat', 'Pattrick', 'm.pat@gmail.com', true),
    new User('Ron', 'Gelly', 'r.gel@gmail.com', true),
    new User('Rach', 'Green', 'r.green@gmail.com', true),
    new User('Phill', 'Richard', 'p.rich@gmail.com', true)
  ];

  public selectedUser: User; 
  constructor() { }

  ngOnInit() {
  }

  onClick(user:any) {
    this.selectedUser = user;
  }
}
