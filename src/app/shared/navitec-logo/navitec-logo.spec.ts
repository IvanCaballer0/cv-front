import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavitecLogo } from './navitec-logo';

describe('NavitecLogo', () => {
  let component: NavitecLogo;
  let fixture: ComponentFixture<NavitecLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavitecLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(NavitecLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
