import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicamento } from '../_interfaces/medicamento.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'medicamentos';
  }

  // Endpoints
  getListMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteMedicamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);

  }

  saveMedicamento(medicamento: Medicamento): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, medicamento);
  }

  getMedicamento(id: number): Observable<Medicamento> {
    return this.http.get<Medicamento>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateMedicamento(id: number, medicamento: Medicamento): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, medicamento);
  }


}
