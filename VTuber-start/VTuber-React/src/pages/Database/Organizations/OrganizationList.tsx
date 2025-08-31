import { useEffect, useState } from 'react';
import SearchBar from '../../../component/SearchBar/SearchBar';

const OrganizationList = () => {
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);

  //This one is about side effects with external systems (subscribing to Observables, cleaning them up).
  useEffect(() => {
    // Subscribe to VTubers Observable
    setDropdownOptions([]);

    // Subscribe to filterService

    // Cleanup subscriptions on unmount
    return () => {};
  }, []);

  return (
    <>
      <div className="option-bar">
        <SearchBar dropdownOption={dropdownOptions} />
      </div>
    </>
  );
};

export default OrganizationList;
