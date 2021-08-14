import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css']
})
export class UserSearchFormComponent implements OnInit {
  user:User = new User(0,"")

 @Output() requiredUser = new EventEmitter<User>()

  submitUserName(){
    this.requiredUser.emit(this.user)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
