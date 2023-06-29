import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserModel } from '../home/model/user.model';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public user: UserModel[] = [];
  public urlRotaInfo!: Boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.service.fecthTableUser().then((res) => (this.user = res));
    this.form = this.formBuilder.group({
      login: [''],
      password: [''],
    });
  }

  signIn() {
    const LOGIN = this.login.trim();
    const SENHA = this.password.trim();

    this.user.map((res) => {
      if (
        LOGIN.indexOf(res.user!!) === 0 &&
        SENHA.indexOf(res.password!!) === 0
      ) {
        this.router.navigateByUrl(`user/information/${res.id}`);
        this.urlRotaInfo = true;
      }
    });

    if (!this.urlRotaInfo) {
      Swal.fire('Aviso', 'Usuário ou Senha Incorreta!', 'warning');
    }
  }

  get login(): string {
    return this.form.get('login')?.value;
  }

  get password(): string {
    return this.form.get('password')?.value;
  }
}
