import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuotePolicyPage } from './quote-policy.page';

describe('QuotePolicyPage', () => {
  let component: QuotePolicyPage;
  let fixture: ComponentFixture<QuotePolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotePolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotePolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
