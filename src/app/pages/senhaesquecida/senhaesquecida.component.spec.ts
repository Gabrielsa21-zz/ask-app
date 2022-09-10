import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaesquecidaComponent } from './senhaesquecida.component';

describe('SenhaesquecidaComponent', () => {
  let component: SenhaesquecidaComponent;
  let fixture: ComponentFixture<SenhaesquecidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenhaesquecidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaesquecidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
