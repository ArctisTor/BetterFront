import { useState, useEffect } from "react";
import "./SearchBarDropdown.css";
import { SearchBarDropdownModel } from "../../models/SearchBarDropdownModel";

const SearchBarDropdown: React.FC<SearchBarDropdownModel> = ({
  options,
  onSelect,
  selectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<string>(selectedCategory);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Sync the internal selectedOption state with selectedCategory prop
  useEffect(() => {
    setSelectedOption(selectedCategory);
  }, [selectedCategory]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption || "Select an option"}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBarDropdown;
