import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIntegrationTableComponent } from './api-integration-table.component';

describe('ApiIntegrationTableComponent', () => {
  let component: ApiIntegrationTableComponent;
  let fixture: ComponentFixture<ApiIntegrationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiIntegrationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiIntegrationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
