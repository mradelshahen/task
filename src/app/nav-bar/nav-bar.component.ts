import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor() { }


  tog: boolean = false;

  public toggle() {
    this.tog = !this.tog;
  }

  ngOnInit() {
  }

}
