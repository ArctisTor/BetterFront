// TypeScript interface for the props
export interface SearchBarDropdownModel {
    options: string[]; // List of options for the dropdown
    onSelect: (selected: string) => void;
    selectedCategory: string; // Callback to handle selection, onSelect is a function that takes a string
}