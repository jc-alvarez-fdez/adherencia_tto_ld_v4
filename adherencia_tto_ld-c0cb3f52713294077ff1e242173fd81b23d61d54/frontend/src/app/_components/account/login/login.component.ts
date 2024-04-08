import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../../../_interfaces/paciente.interface';
import { ErrorService } from '../../../_services/error.service';
import { PacienteService } from '../../../_services/paciente.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../../_shared/spinner/spinner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SpinnerComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _pacienteService: PacienteService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  login() {

    // Validamos que el usuario ingrese datos
    if (this.email == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    // Creamos el body
    const paciente: Paciente = {
      email: this.email,
      password: this.password
    }

    this.loading = true;
    this._pacienteService.login(paciente).subscribe({
      next: (token) => { // devuelve el token y lo guarda en localstorage
        localStorage.setItem('token', token);
        this.router.navigate(['/medicamentos']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }
}
