import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu=false;
  constructor() { }

  ngOnInit(): void {
  }

  menuOpen(){
    this.menu=true;
  }
  menuClose(){
    this.menu=false;
  }
}
