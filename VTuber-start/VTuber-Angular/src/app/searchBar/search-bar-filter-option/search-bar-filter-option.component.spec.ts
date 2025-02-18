import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarFilterOptionComponent } from './search-bar-filter-option.component';

describe('SearchBarFilterOptionComponent', () => {
  let component: SearchBarFilterOptionComponent;
  let fixture: ComponentFixture<SearchBarFilterOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarFilterOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarFilterOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
