import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  sortedData = [...dataFake].sort((a, b) => {
    return parseInt(b.id) - parseInt(a.id);
  });

  mainArticle = this.sortedData[0];

  otherArticles = this.sortedData.slice(1,4);

}
