import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRequestComponent } from './owner-request.component';

describe('OwnerRequestComponent', () => {
  let component: OwnerRequestComponent;
  let fixture: ComponentFixture<OwnerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
