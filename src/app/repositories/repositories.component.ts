import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() repos!:any[]
  constructor() { }

  ngOnInit(): void {
  }

}