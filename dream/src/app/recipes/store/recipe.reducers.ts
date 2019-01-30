import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState  {
  recipes: State
}

export interface State {
  recipes: Recipe[]
}

const intialState: State = {
  recipes:  [
    new Recipe(
      'Pizza',
      'Super tasty pizza - just awesome!',
      'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
      [
        new Ingredient('Flour', 500),
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 1)
      ]
    ),
    new Recipe(
      'Delicious Meat',
      'Delicious Meat for real men!',
      'https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 10),
        new Ingredient('Onion', 2)
      ]
    )
  ]
};

export function recipeReducer(state = intialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}