import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTuberEntityComponent } from './vtuber-entity.component';

describe('VTuberEntityComponent', () => {
  let component: VTuberEntityComponent;
  let fixture: ComponentFixture<VTuberEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VTuberEntityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VTuberEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
