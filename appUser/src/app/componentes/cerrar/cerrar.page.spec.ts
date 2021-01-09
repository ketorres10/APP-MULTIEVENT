import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CerrarPage } from './cerrar.page';

describe('CerrarPage', () => {
  let component: CerrarPage;
  let fixture: ComponentFixture<CerrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CerrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
