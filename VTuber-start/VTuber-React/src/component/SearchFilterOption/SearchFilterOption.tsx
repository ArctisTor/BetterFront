import { FilterOption } from '../../models/FilterOption';
import { useState, useEffect } from 'react';
import { filterService } from '../../services/filterService';
import './SearchFilterOption.css';

import { useDispatch } from 'react-redux';
import { decrement } from '../../slices/filterSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';

const SearchFilterOption = () => {
  const [filters, setFilters] = useState<FilterOption[]>([]);

  const handleRemoveFilter = (index: number) => {
    filterService.removeFilter(index);
    dispatch(decrement(index));
  };

  let dispatch = useDispatch();
  let currentFilters = useSelector((state: RootState) => state.filters.filters);

  // Sync the internal selectedOption state with selectedCategory prop
  useEffect(() => {
    // Subscribe to the filters$ Observable
    const subscription = filterService.filters.subscribe((newFilters) => {
      setFilters(newFilters);
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <div>
        {filters.length > 0 ? (
          <>
            <h3>Current Filters:</h3>
            <div className="filter-container">
              {currentFilters.map((filter, index) => (
                <div key={index} className="filter-box">
                  <p className="field">{filter.query}, </p>
                  <p className="field">{filter.category}</p>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveFilter(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <></> // Show this message when no filters exist
        )}
      </div>
    </>
  );
};

export default SearchFilterOption;
