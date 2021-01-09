import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreinformationSubeventComponent } from './moreinformation-subevent.component';

describe('MoreinformationSubeventComponent', () => {
  let component: MoreinformationSubeventComponent;
  let fixture: ComponentFixture<MoreinformationSubeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreinformationSubeventComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreinformationSubeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
