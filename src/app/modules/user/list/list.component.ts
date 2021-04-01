import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: User[] = [];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
}
