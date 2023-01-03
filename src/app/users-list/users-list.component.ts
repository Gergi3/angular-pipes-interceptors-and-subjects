import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users!: any[] | null;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.users$.subscribe(users => {
      this.users = users;
    })
  }

  reloadHandler() {
    this.userService.reloadUsers();
  }
}
