import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getAll = () =>
    this.http
      .get(`${this.url}/users?per_page=6&delay=3`)
      .pipe(map((resp) => resp['data']));

  getById = (id: string) =>
    this.http.get(`${this.url}/users/${id}`).pipe(map((resp) => resp['data']));
}
