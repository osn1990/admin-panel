import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lot-row',
  templateUrl: './lot-row.component.html',
  styleUrls: ['./lot-row.component.css']
})
export class LotRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  loadLotDetails() {
    console.log('load details executed...');
  }

}