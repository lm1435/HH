import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cropiq',
  templateUrl: './cropiq.component.html',
  styleUrls: ['./cropiq.component.css'],
})
export class CropiqComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'HH';
  dataSet = [
    {
      name: 'Jamie',
      age: 'nunya',
      address: 'why?',
    },
    {
      name: 'Josh',
      age: '60?',
      address: 'Somewhere in NC',
    },
    {
      name: 'Luis',
      age: '34',
      address: 'Humid Houston',
    },
  ];
  alerting() {
    alert('welcome to our POC');
  }
}
