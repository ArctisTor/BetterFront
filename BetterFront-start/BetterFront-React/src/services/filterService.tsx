import { BehaviorSubject } from 'rxjs';
import { FilterOption } from '../models/FilterOption';

class FilterService {
  // BehaviorSubject holds current filters and emits updates
  private filtersSubject = new BehaviorSubject<FilterOption[]>([]);

  // Observable for components to subscribe to
  public filters = this.filtersSubject.asObservable();

  // Add a filter
  addFilter(newFilter: FilterOption): void {
    const current = this.filtersSubject.getValue();
    this.filtersSubject.next([...current, newFilter]);
  }

  // Remove a filter by index
  removeFilter(index: number): void {
    const current = this.filtersSubject.getValue();
    this.filtersSubject.next(current.filter((_f, i) => i !== index));
  }

  // Get the current filters snapshot
  getFilters(): FilterOption[] {
    return this.filtersSubject.getValue();
  }

  // Optionally, set all filters at once
  setFilters(filters: FilterOption[]): void {
    this.filtersSubject.next(filters);
  }
}

export const filterService = new FilterService();
