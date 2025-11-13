export class FilterOption {
  query: string;
  category: string;

  constructor(query: string, category: string) {
    (this.query = query), (this.category = category);
  }

  // Method to return the object in a serializable form (plain object)
  toPlainObject() {
    return {
      query: this.query,
      category: this.category,
    };
  }
}
