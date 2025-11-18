import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTuberListComponent } from './vtuber-list.component';

describe('VTuberListComponent', () => {
  let component: VTuberListComponent;
  let fixture: ComponentFixture<VTuberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VTuberListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VTuberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
