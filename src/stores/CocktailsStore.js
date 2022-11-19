import { defineStore } from "pinia";
import fetcher from "@/api/fetcher";

export const useCocktailsStore = defineStore("CocktailsStore", {
  state: () => ({
    cocktails: [],
    isLoading: false,
  }),
  actions: {
    async fetchCocktails() {
      this.isLoading = true;

      if (this.cocktails.length > 0) {
        this.cocktails.length = 0;
      }

      try {
        const cocktailList = await fetcher();

        cocktailList.forEach((drink) => {
          this.cocktails.push(drink.drinks[0]);
        });

        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
