import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  i= [1,2,3,4,5];
  mobile: boolean=false;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width < 500) { // 768px portrait
      this.mobile = true;
    }
    console.log(this.mobile);
  }

}
