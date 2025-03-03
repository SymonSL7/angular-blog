import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  photoCover:string = ""
  homeTitle:string = ""
  homeDescription:string = ""
  private id:string | null = "0"

  ngOnInit(): void {

  }

}
