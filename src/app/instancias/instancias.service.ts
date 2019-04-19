import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstanciasService {

  constructor(private httpClient: HttpClient) { }

  listarRegioes() {
    return this.httpClient.get(environment.api + 'listar_regioes');
  }
}
