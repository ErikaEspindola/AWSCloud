import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstanciasService } from 'src/app/instancias/instancias.service';

@Component({
  selector: 'app-criar-instancias',
  templateUrl: './criar-instancias.component.html',
  styleUrls: ['./criar-instancias.component.scss']
})
export class CriarInstanciasComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  listaRegioes = [];
  listaTipoInstancias = [];

  constructor(private _instanciasService: InstanciasService, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nomeRegiao: ['', Validators.required],
      tipoMaquina: ['', Validators.required],
      grupoSeguranca: ['', Validators.required],
      precoInstancia: ['', Validators.required],
      imageId: ['', Validators.required],
      nomeMaquina: ['', Validators.required],
      tipoVolume: ['', Validators.required],
      tamanhoVolume: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this._instanciasService.listarRegioes()
    .subscribe(
      (lista: any) => {
        this.listaRegioes = lista;
      },
      (error) => console.log(error)
    )

    this._instanciasService.listarTiposInstancias()
    .subscribe(
      (lista: any) => {
        this.listaTipoInstancias = lista;
      },
      (error) => console.log(error)
    )
  }

  criarInstancia() {
    this._instanciasService.criarInstancia()
    .subscribe();
  }
}
