import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfavouriteRestListComponent } from './userfavourite-rest-list.component';

describe('UserfavouriteRestListComponent', () => {
  let component: UserfavouriteRestListComponent;
  let fixture: ComponentFixture<UserfavouriteRestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfavouriteRestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfavouriteRestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
