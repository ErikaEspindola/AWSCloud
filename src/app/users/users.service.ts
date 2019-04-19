import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  setKeys(access_key, secret_key) {
    let params = new HttpParams();

    params = params.append('access_key', access_key);
    params = params.append('secret_key', secret_key);

    return this.httpClient.get(environment.api + 'aws_keys', { params: params });
  }
}
