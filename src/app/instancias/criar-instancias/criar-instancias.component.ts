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

  constructor(private _instanciasService: InstanciasService, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required],
      firstCtrl4: ['', Validators.required]
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
  }
}
