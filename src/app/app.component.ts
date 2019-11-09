import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts ;
  constructor(private http:HttpClient){

  }
  url: string ="https://api.nasa.gov/planetary/apod?api_key=6PhZ8FgDiJd6ScibVf7CfJlelhYgSLlefyV5bSQq";

  ngOnInit():void{
    this.http.get(this.url).subscribe(response =>{
      this.posts = response
      // console.log(response);
    });
  }
}
