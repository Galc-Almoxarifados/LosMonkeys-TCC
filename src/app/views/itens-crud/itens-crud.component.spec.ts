import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCrudComponent } from './itens-crud.component';

describe('ItensCrudComponent', () => {
  let component: ItensCrudComponent;
  let fixture: ComponentFixture<ItensCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
