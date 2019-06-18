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

  criarInstancia(dados) {
    return this.httpClient.post(environment.api + 'request_spot_instance', dados);
  }

  listarTiposInstancias() {
    return this.httpClient.get(environment.api + 'instance_types');
  }

  listarInstancias() {
    return this.httpClient.get(environment.api + 'get_instances');
  }

  enviarComando(texto) {
    return this.httpClient.post(environment.api + 'send_command', texto);
  }
}
