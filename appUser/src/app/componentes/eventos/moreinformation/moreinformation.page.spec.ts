import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreinformationPage } from './moreinformation.page';

describe('MoreinformationPage', () => {
  let component: MoreinformationPage;
  let fixture: ComponentFixture<MoreinformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreinformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreinformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
