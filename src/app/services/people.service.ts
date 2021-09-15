import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { People } from '../models/people';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `${this.baseUrl}${query}`;
    return this.http.get(url);
  }

  getPeopleList(): Observable<People> {
    return this.getQuery(
      '?results=16&inc=name,gender,nat,email,picture&noinfo'
    ).pipe(
      map(
        (data: any) => {
          return data;
        },
        (err: any) => {
          console.log(err);
        }
      )
    );
  }
}
