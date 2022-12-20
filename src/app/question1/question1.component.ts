import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  constructor() { }

  array = [2,3,10,15,26,35,50, 63];
  indexNo : any;
  output : any;
  

  ngOnInit(): void {

  }

  findNumber()
  {
    this.output = this.array[this.indexNo];
  }

}
