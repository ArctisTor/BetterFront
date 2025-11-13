import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarDropdownComponent } from './search-bar-dropdown.component';

describe('SearchBarDropdownComponent', () => {
  let component: SearchBarDropdownComponent;
  let fixture: ComponentFixture<SearchBarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
