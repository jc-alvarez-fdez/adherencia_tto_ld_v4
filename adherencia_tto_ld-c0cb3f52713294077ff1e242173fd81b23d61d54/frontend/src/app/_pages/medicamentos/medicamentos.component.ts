import { Component, OnInit } from '@angular/core';
import { CommonModule, NumberFormatStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Medicamento } from '../../_interfaces/medicamento.interface';
import { MedicamentoService } from '../../_services/medicamentos.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { ProgressComponent } from '../../_shared/progress/progress.component';


@Component({
  selector: 'app-list-medicamentos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
   // ProgressComponent
  ],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.scss'
})
export class ListMedicamentosComponent implements OnInit {


  public listMedicamentos: Medicamento [] = [];
  loading: boolean = false;
  constructor (
    private http: HttpClient,
    private _medicamentoService: MedicamentoService,
    private toastr: ToastrService) {}


  ngOnInit(): void {
    this.getListMedicamentos();
  }

  getListMedicamentos() {

    this.loading = true;
    this._medicamentoService.getListMedicamentos().subscribe((data: Medicamento[]) => {
    this.listMedicamentos = data;
    this.loading = false;
    console.table(`Carga los medicamentos en listado ${this.listMedicamentos}`)
    })
  }

  deleteMedicamento(id: number) {
    this.loading = true;
    this._medicamentoService.deleteMedicamento(id).subscribe(data => {
      console.log(data);
      this.getListMedicamentos();
      this.toastr.warning('El medicamento se ha eliminado de la base de datos', 'Medicamento eliminado')
    });
    }

}
