import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from '../../home/model/user.model';
import { ServiceService } from '../../service/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
})
export class CadastroFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(new UserModel());
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.addUser(this.form.getRawValue()).then((res) => {
        if (res) {
          Swal.fire('Usuário', 'Usuário criado com Sucesso!', 'success');
          this.router.navigateByUrl('/login');
        }
      });
    }
  }
}
