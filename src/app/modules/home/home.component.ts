import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { UserModel } from './model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public form!: FormGroup;
  public id!: number;
  constructor(
    private formBuilder: FormBuilder,
    private _home: ServiceService,
    private _router: ActivatedRoute
  ) {
    this._router.params.subscribe((res) => (this.id = res['id']));
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(new UserModel());
  }

  ngAfterViewInit(): void {
    this._home.fetchById(this.id).then((res) => this.form.patchValue(res));
  }
}
