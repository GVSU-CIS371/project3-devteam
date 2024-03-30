//https://pinia.vuejs.org/core-concepts/

import { defineStore } from 'pinia'

export interface Recipe {
    name: string;
    temperature: string;
    creamer: string;
    syrup: string;
    baseBeverage: string;
  }

export const useIngredientsStore = defineStore('ingredients', {
  state: () => ({
    recipes: [] as Recipe[],
  }),
  actions: {
    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
    },
    removeRecipe(recipeName: string) {
        const index = this.recipes.findIndex(recipe => recipe.name === recipeName);
        if (index !== -1) {
          this.recipes.splice(index, 1);
        }
      },
    },
    getters: {
      getRecipeByName: (state) => (recipeName: string) => {
          return state.recipes.find(recipe => recipe.name === recipeName);
        },
      },
  });