import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { CadastroFormComponent } from './cadastro-form.component';

describe('CadastroFormComponent', () => {
  let component: CadastroFormComponent;
  let fixture: ComponentFixture<CadastroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CadastroFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
