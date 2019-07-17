import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { InstanciasService } from '../instancias.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-listar-instancias',
  templateUrl: './listar-instancias.component.html',
  styleUrls: ['./listar-instancias.component.scss']
})
export class ListarInstanciasComponent implements OnInit {
  listaInstancias = [];
  a: string;
  b: string;

  constructor(private _instanciasService: InstanciasService) { }

  ngOnInit() {
    this.a = atob(sessionStorage.getItem('a'));
    this.b = atob(sessionStorage.getItem('b'));

    this._instanciasService.listarInstancias(this.a, this.b)
    .subscribe(
      (res: any) => this.listaInstancias = res.Reservations.Instances,
      (error) => console.log(error)
    )
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}
