import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListaUtentiComponent } from './dialog-lista-utenti.component';

describe('DialogListaUtentiComponent', () => {
  let component: DialogListaUtentiComponent;
  let fixture: ComponentFixture<DialogListaUtentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogListaUtentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogListaUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
