import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrationPage } from './registration.page';

describe('RegistrationPage', () => {
  let component: RegistrationPage;
  let fixture: ComponentFixture<RegistrationPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPage, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go to home page on registration', () => {
    spyOn(router, 'navigate');
    component.registration()
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

});
