import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSubeventPage } from './detail-subevent.page';

describe('DetailSubeventPage', () => {
  let component: DetailSubeventPage;
  let fixture: ComponentFixture<DetailSubeventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSubeventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSubeventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
