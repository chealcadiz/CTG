import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user: UserService) { }

  private currentUser : User;

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }

}
