import { useState, useEffect } from "react";
import { VTuber } from "../models/VTuber";
import VTuberEntity from "./VTuberEntity";
import SearchBar from "../component/SearchBar/SearchBar";
import SearchFilterOption from "../component/SearchFilterOption/SearchFilterOption";
import { FilterOption } from "../models/FilterOption";
import { filterService } from "../services/filterService";
import HttpService from "../services/httpService";

import "./VTuberList.css";
import DebutVTuber from "../component/modal/debutVTuberModal/DebutVTuber";

const httpService = new HttpService();

const VTuberList = () => {
  const [allVtubers, setAllVtubers] = useState<VTuber[]>([]);
  const [filterVtubers, setFilterVtubers] = useState<VTuber[]>([]);
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterOption[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const vtuberList = (filterOptions: FilterOption[]): VTuber[] => {
    if (filterOptions.length > 0) {
      return allVtubers.filter((vtuber) => {
        return filterOptions.some((filter) => {
          const value = vtuber[filter.category as keyof VTuber];
          if (typeof value === "string") {
            return value.includes(filter.query);
          } else if (typeof value === "number") {
            return value == Number(filter.query);
          }
          return false;
        });
      });
    }
    return allVtubers; // If no filters, return all VTubers
  };

  useEffect(() => {
    if (allVtubers.length > 0) {
      setFilterVtubers(vtuberList(filters)); // Apply filters to allVtubers
    }
  }, [allVtubers, filters]); // Dependency array ensures the effect runs when either `allVtubers` or `filters` change

  useEffect(() => {
    const handleVtuberUpdate = (newVtubers: VTuber[]) => {
      setDropdownOptions(Object.keys(newVtubers[0]));
      setAllVtubers(newVtubers); // Update the state with the latest vtubers
    };

    const handleFilterOptionUpdate = (newFilterOptions: FilterOption[]) => {
      setFilters(newFilterOptions); //async function
      setFilterVtubers(vtuberList(newFilterOptions));
    };

    httpService.subscribeOnVTubers(handleVtuberUpdate);
    filterService.subscribe(handleFilterOptionUpdate);

    httpService.getAllVTubers();

    // Cleanup on unmount
    return () => httpService.unsubscribeOnVTubers(handleVtuberUpdate);
  }, []);

  return (
    <>
      <div className="option-bar">
        <button className="debut-button" onClick={openModal}>+ Debut</button>
        <DebutVTuber isOpen={isModalOpen} closeModal={closeModal}/>
        <SearchBar dropdownOption={dropdownOptions} />
      </div>
      <SearchFilterOption />
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center"></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filterVtubers.map((vtuber) => (
              <VTuberEntity key={vtuber.id} vtuber={vtuber} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VTuberList;
