import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private db: AngularFireDatabase) { }
  // private url:string = "https://my-json-server.typicode.com/typicode/demo/posts";
  // posts: any[];
  // https://reqres.in/api/users
  // https://jsonplaceholder.typicode.com/posts
  // https://api.nasa.gov/planetary/apod?api_key=Dgge0EaniuqrYZFhxYFhohHIdWjSZ7b4tI6d6Nmo
  
  getAll(){
    return this.db.list('/person');
  }
  get(){
    return this.db.list('/person').snapshotChanges();
  }
  createPost(input){
    return this.db.list('/person').push(input);
  }

  update(personId, person){
    return this.db.object('/products/'+personId).update(person);
  }

  delete(personId){
    return this.db.object('/person/'+personId).remove();
  }
}
