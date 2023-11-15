import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jasmine.createSpy('close'),
          },
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { message: 'Test Message' },
        },
      ],
    });
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close with true when onYes is called', () => {
    const dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<
      MatDialogRef<ConfirmDialogComponent, boolean>
    >;
    component.onYes();

    expect(dialogRef.close).toHaveBeenCalledWith(true);
  });

  it('should close with false when onNo is called', () => {
    const dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<
      MatDialogRef<ConfirmDialogComponent, boolean>
    >;
    component.onNo();

    expect(dialogRef.close).toHaveBeenCalledWith(false);
  });
});
