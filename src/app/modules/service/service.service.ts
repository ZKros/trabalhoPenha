import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppInjector } from 'src/app/shared/services.service';
import { UserModel } from '../home/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  protected _http!: HttpClient;
  constructor() {
    this._http = AppInjector.injector.get(HttpClient);
  }

  fecthTableUser() {
    return this._http
      .get<UserModel[]>('http://localhost:3000/users')
      .toPromise()
      .then((res) => {
        if (res === undefined) {
          return [];
        }
        return res;
      });
  }

  fetchById(id: number) {
    return this._http
      .get<UserModel>(`http://localhost:3000/users/${id}`)
      .toPromise()
      .then((res) => {
        if (res === undefined) {
          return [];
        }
        return res;
      });
  }

  addUser(obj: UserModel) {
    return this._http
      .post<UserModel>('http://localhost:3000/users', obj)
      .toPromise()
      .then((res) => {
        if (res === undefined) {
          return [];
        }
        return res;
      });
  }
}
