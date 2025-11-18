import { MeadIngredients } from './MeadIngredients';
import { MeadSteps } from './MeadSteps';

export interface MeadRecipe {
  recipe_id: string;
  abv: number;
  name: string;
  ingredients: MeadIngredients[];
  steps: MeadSteps[];
}
