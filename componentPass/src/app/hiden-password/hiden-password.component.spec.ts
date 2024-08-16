import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidenPasswordComponent } from './hiden-password.component';

describe('HidenPasswordComponent', () => {
  let component: HidenPasswordComponent;
  let fixture: ComponentFixture<HidenPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HidenPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HidenPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
