import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Key } from 'protractor';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  person;
  id;

  
  constructor(private apiService: ApiServiceService,
    private router: Router,
    private route: ActivatedRoute) {

    this.person = apiService;
  }

  // name, email, phone, birthdate, img


  createPost(name, email, phone, birthdate, img) {
    
    
    let input;
    
      this.person.createPost(input = {
        title: name,
        email: email,
        phone: phone,
        start: birthdate,
        imgUrl: img
      });
    

  }


  // url :string ='https://jsonplaceholder.typicode.com/posts';

  // createPost(input){
  //   let post ={ title : input, id:''}
  //   this.http.post(this.url, JSON.stringify(post)).subscribe( (response: any []) => {
  //     this.posts.splice(0,0,post); 
  //   });
  // }


  ngOnInit() {

  }

}
