import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
data:any;
  constructor(private htc: HttpClient) { }

  getByid(): Observable<any> {  
    return this.htc.get('http://localhost:3000/Users', { responseType: 'json' });
  }
  delete(id: any): Observable<any> {  // Login Check
    console.log("delete service");
    
    return this.htc.delete('http://localhost:3000/Users/' + id, { responseType: 'json' });
  }
  edit(id: any, Users: Users): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.put('http://localhost:3000/Users/' + id, JSON.stringify(Users), httpOptions);
  }
  
  get1(id: any): Observable<any> {
    {
      return this.htc.get('http://localhost:3000/Users/' + id, { responseType: 'json' });
    }
  }
  
  postUsers(users: Users): Observable<any> {  // Login Check
    alert("service")
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post('http://localhost:3000/Users', JSON.stringify(users), httpOptions);
  }
}
