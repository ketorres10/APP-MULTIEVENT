import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeteccionPage } from './deteccion.page';

describe('DeteccionPage', () => {
  let component: DeteccionPage;
  let fixture: ComponentFixture<DeteccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeteccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeteccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
