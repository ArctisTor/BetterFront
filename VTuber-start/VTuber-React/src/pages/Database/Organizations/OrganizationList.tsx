import { useEffect, useState } from 'react';
import SearchBar from '../../../component/SearchBar/SearchBar';
import httpService from '../../../services/httpService'; // singleton instance
import { Organization } from '../../../models/Organization';
import OrganizationEntity from './OrganizationEntity';

const OrganizationList = () => {
  const [allOrgs, setAllOrgs] = useState<Organization[]>([]);
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);

  //This one is about side effects with external systems (subscribing to Observables, cleaning them up).
  useEffect(() => {
    setDropdownOptions([]);

    const orgSubscription = httpService
      .getAllOrganizations()
      .subscribe((allOrgs) => {
        if (allOrgs.length > 0) {
          setAllOrgs(allOrgs);
        }
      });

    // Cleanup subscriptions on unmount
    return () => {
      orgSubscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="option-bar">
        <SearchBar dropdownOption={dropdownOptions} />
      </div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center"></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allOrgs.map((org) => (
              <OrganizationEntity key={org.id} org={org} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganizationList;
