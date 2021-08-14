import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitSearch';
  gitUser:any
  gitHubRepos:any 
  userName!:string 

  constructor(private dataService:DataService){}
  findUser(user:User){
    this.userName = user.userName
    console.log(this.userName)

    this.dataService.getGitHubUsers(this.userName).subscribe(data => {this.gitUser = data
      console.log(data)})
    
    
      this.dataService.getGitHubRepos(this.userName).subscribe(data => {
        this.gitHubRepos = data
        console.log(data)
      })
    
}

}