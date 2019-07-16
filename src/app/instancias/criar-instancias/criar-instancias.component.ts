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
  a: string;
  b: string;

  constructor(private _instanciasService: InstanciasService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.a = atob(sessionStorage.getItem('a'));
    this.b = atob(sessionStorage.getItem('b'));

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

    this._instanciasService.listarRegioes(this.a, this.b)
      .subscribe(
        (lista: any) => {
          this.listaRegioes = lista;
        },
        (error) => console.log(error)
      )

    this._instanciasService.listarTiposInstancias(this.a, this.b)
      .subscribe(
        (lista: any) => {
          this.listaTipoInstancias = lista;
        },
        (error) => console.log(error)
      )
  }

  onFilesAdded(files: File[]) {

    this.upload(files, 0);

  }
  
  upload(array, i) {

    if(i < array.length) {
      let formData = new FormData();

      formData.append('file', array[i], array[i].name);

      this._instanciasService.uploadFile(formData)
      .subscribe(x => console.log(x));

      this.upload(array, i + 1);
    }
  }

  montarObjetoCriarInstancia() {
    return {
      SpotPrice: this.firstFormGroup.get('precoInstancia').value,
      ImageId: this.firstFormGroup.get('imageId').value,
      InstanceType: this.firstFormGroup.get('tipoMaquina').value,
      DeviceName: this.firstFormGroup.get('nomeMaquina').value,
      VolumeType: this.firstFormGroup.get('tipoVolume').value,
      VolumeSize: this.firstFormGroup.get('tamanhoVolume').value,
      ak: this.a,
      sk: this.b
    }
  }

  criarInstancia() {
    let dados = this.montarObjetoCriarInstancia();

    this._instanciasService.criarInstancia(dados)
      .subscribe();

    this._instanciasService.enviarComando('ps aux')
      .subscribe();
  }
}
