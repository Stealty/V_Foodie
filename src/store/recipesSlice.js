import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    ADD_RECIPES: (curState, recipes) => {
      recipes.forEach(
        (recipe) =>
          (recipe["isHeart"] = window.localStorage.getItem(
            "recipe" + recipe.id
          ))
      );
      const updatedRecipes = [...curState.recipes, ...recipes];
      return { recipes: updatedRecipes };
    },
    ADD_RECIPE: (curState, recipe) => {
      recipe["isHeart"] = window.localStorage.getItem("recipe" + recipe.id);
      const allRecipes = [...curState.recipes];
      allRecipes.push(recipe);
      return { recipes: allRecipes };
    },
    REMOVE_RECIPE: (curState, recipe) => {
      const allRecipes = [...curState.recipes];
      allRecipes.splice(allRecipes.indexOf(recipe), 1);
      return { recipes: allRecipes };
    },
    DELETE_ALL_RECIPES: (curState) => {
      return { recipes: [] };
    },
    TOOGLE_HEART_RECIPES: (curState, recipeID) => {
      const recipeIndex = curState.recipes.findIndex(
        (recipe) => recipeID === recipe.id
      );
      const newHeartStatus = !curState.recipes[recipeIndex].isHeart; // TODO: this should set in local statorage
      newHeartStatus
        ? window.localStorage.setItem("recipe" + recipeID, newHeartStatus)
        : window.localStorage.removeItem("recipe" + recipeID);
      const updatedRecipes = [...curState.recipes];
      updatedRecipes[recipeIndex] = {
        ...curState.recipes[recipeIndex],
        isHeart: newHeartStatus,
      };
      return {
        recipes: updatedRecipes,
      };
    },
  };
  initStore(actions, {
    recipes: [],
  });
};

export default configureStore;
