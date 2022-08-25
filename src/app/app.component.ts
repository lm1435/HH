import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HH';
  dataSet = [
    {
      name: 'Jamie',
      age: 'nunya',
      address: 'why?'
    },
    {
      name: 'Josh',
      age: '60?',
      address: 'Somewhere in NC'
    },
    {
      name: 'Luis',
      age: '34',
      address: 'Humid Houston'
    }
  ]
  alerting() {
    alert('welcome to our POC');
  }
}
