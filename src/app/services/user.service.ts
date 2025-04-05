import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TokenSet } from '../models/users/token-set.model';
import { environment } from '../../environments/environment';
import { User } from '../models/users/user.model';


@Injectable({ providedIn: 'root' })
export class DescriptiveMeasuresUserService {
  private apiURL = `${environment.apiProtocol}://${environment.apiHost}:${environment.apiPort}`
  constructor(private http: HttpClient) {}

  getToken(username: string, password: string): Observable<TokenSet> {
    return this.http
      .post<TokenSet>(
        `${this.apiURL}/login`,
        { 
          username: username,
          password: password
        }
      )
      .pipe(tap( result => console.log('Response: ', result)), map((token_set) => token_set));
  }

  getUser(): Observable<User> {
    return this.http
      .get<User>(
        `${this.apiURL}/user/info`
      )
      .pipe(tap( result => console.log('Response: ', result)), map((user) => user));
  }
}