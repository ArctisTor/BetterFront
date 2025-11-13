import { useEffect, useState } from 'react';
import { MeadRecipe } from '../../../models/mead_models/MeadRecipe';
import MeadRecipeEntity from './MeadRecipeEntity';
import SearchBar from '../../../component/SearchBar/SearchBar';
import httpService from '../../../services/httpService'; // singleton instance

const MeadRecipeList = () => {
  const [allMeads, setAllMeads] = useState<MeadRecipe[]>([]);
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);

  //This one is about side effects with external systems (subscribing to Observables, cleaning them up).
  useEffect(() => {
    setDropdownOptions([]);

    const meadSubscription = httpService
      .getAllMeadRecipes()
      .subscribe((allMeads) => {
        if (allMeads.length > 0) {
          setAllMeads(allMeads);
        }
      });

    // Cleanup subscriptions on unmount
    return () => {
      meadSubscription.unsubscribe();
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
            {allMeads.map((mead) => (
              <MeadRecipeEntity key={mead.recipe_id} meadRecipe={mead} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeadRecipeList;
