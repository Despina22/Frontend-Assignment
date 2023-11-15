import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule, MatIconModule, RouterTestingModule],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a toolbar with the logo and navigation links', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    const toolbar = compiled.querySelector('mat-toolbar');
    expect(toolbar).toBeTruthy();

    const logo = compiled.querySelector(
      'img[src="../../../../assets/images/logo.jpg"]'
    );
    expect(logo).toBeTruthy();

    const homeLink = compiled.querySelector('a[routerLink="/"]');
    expect(homeLink).toBeTruthy();

    const orderDetailsLink = compiled.querySelector(
      'a[routerLink="/order-details"]'
    );
    expect(orderDetailsLink).toBeTruthy();

    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon).toBeTruthy();
  });
});
