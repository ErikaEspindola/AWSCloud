import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstanciasService {

  constructor(private httpClient: HttpClient) { }

  listarRegioes(ak, sk) {
    let param = {
      ak: ak,
      sk: sk
    };

    return this.httpClient.post(environment.api + 'listar_regioes', param);
  }

  criarInstancia(dados) {
    return this.httpClient.post(environment.api + 'request_spot_instance', dados);
  }

  listarTiposInstancias(ak, sk) {
    let param = {
      ak: ak,
      sk: sk
    };

    return this.httpClient.post(environment.api + 'instance_types', param);
  }

  listarInstancias(ak, sk) {
    let param = {
      ak: ak,
      sk: sk
    };

    return this.httpClient.post(environment.api + 'get_instances', param);
  }

  enviarComando(texto) {
    return this.httpClient.post(environment.api + 'send_command', texto);
  }

  uploadFile(file) {
    return this.httpClient.post(environment.api + 'upload_file', file);
  }
}
