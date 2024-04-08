import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Paciente } from '../_interfaces/paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'auth/'
   }

   register(paciente: Paciente): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/register`, paciente);
   }

   login(paciente: Paciente): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, paciente)
   }
}
