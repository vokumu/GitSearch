import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey:string = environment.gitApiKey

  getGitHubUsers(searchQuery:string):Observable<any>{
    
    return this.http.get<any>(`https://api.github.com/users/${searchQuery}?=${this.apiKey}`
    )
  }

  getGitHubRepos(searchQuery:string):Observable<any>{
  
    return this.http.get<any>(`https://api.github.com/users/${searchQuery}/repos?=${this.apiKey}`
    )
  }
  
  constructor(private http:HttpClient) { }
}

