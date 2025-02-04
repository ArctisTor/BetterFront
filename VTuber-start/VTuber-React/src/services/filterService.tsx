import { FilterOption } from "../models/FilterOption";

class FilterService {
  private filters: FilterOption[] = []; // Private state of filters
  private subscribers: ((filters: FilterOption[]) => void)[] = []; // Array of subscriber callbacks


  // Subscribe method: components register for updates
  subscribe(callback: (filters: FilterOption[]) => void): void {
    this.subscribers.push(callback);
  }

  // Unsubscribe method: remove a component's callback
  unsubscribe(callback: (filters: FilterOption[]) => void): void {
    this.subscribers = this.subscribers.filter((cb) => cb !== callback);
  }

  // Notify all subscribers of a change
  private notify(): void {
    this.subscribers.forEach((callback) => callback(this.filters));
  }

  // Add a filter and notify subscribers
  addFilter(newFilter: FilterOption): void {
    this.filters = [... this.filters, newFilter]
    this.notify(); // Notify subscribers
  }

  // Remove a filter and notify subscribers
  removeFilter(index: number): void {
    this.filters = this.filters.filter((_vtuber, i) => i !== index); // Remove filter at index
    this.notify(); // Notify subscribers
  }

  // Get current filters
  getFilters(): FilterOption[] {
    return this.filters;
  }
}

export const filterService = new FilterService();
