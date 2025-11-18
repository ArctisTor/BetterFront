import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtuberHeaderComponent } from './vtuber-header.component';

describe('VtuberHeaderComponent', () => {
  let component: VtuberHeaderComponent;
  let fixture: ComponentFixture<VtuberHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtuberHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VtuberHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
