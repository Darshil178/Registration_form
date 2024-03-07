import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://localhost:7003/api/user/'; // Adjust the URL accordingly

  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user, {
      responseType: 'text',
    });
  }
  getDetails() {
    return this.http.get('https://localhost:7003/api/user/');
  }
}
