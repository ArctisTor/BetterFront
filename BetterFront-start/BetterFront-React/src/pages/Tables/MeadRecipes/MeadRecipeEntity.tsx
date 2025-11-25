import { MeadRecipe } from '../../../models/mead_models/MeadRecipe';

const MeadRecipeEntity = ({ meadRecipe }: { meadRecipe: MeadRecipe }) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative max-w-xs mx-auto w-full">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2 font-bold text-center">{meadRecipe.name}</div>
          </div>
          <div className="border border-gray-100 mb-5"></div>
        </div>
      </div>
    </>
  );
};

export default MeadRecipeEntity;
