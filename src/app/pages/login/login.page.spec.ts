import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPage, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go to home page on login', () => {
    spyOn(router, 'navigate');
    component.login()
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
  
  it('should go to registration page on registration', () => {
    spyOn(router, 'navigate');
    component.registration()
    expect(router.navigate).toHaveBeenCalledWith(['registration']);
  });
});
