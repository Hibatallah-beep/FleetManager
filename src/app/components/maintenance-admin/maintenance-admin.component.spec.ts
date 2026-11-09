import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceAdminComponent } from './maintenance-admin.component';

describe('MaintenanceAdminComponent', () => {
  let component: MaintenanceAdminComponent;
  let fixture: ComponentFixture<MaintenanceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
