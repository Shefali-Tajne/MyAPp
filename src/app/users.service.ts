import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
  constructor(public httpclient : HttpClient) { }
  getData() {
   // return this.httpclient.get('https://reqres.in/api/users?page=2').toPromise();
   return this.httpclient.get('./assets/contacts_file.json').toPromise();
}
}
