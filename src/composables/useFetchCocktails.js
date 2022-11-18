import { ref } from "vue";
import fetcher from "@/api/fetcher";

const useFetchCocktails = () => {
  const cocktails = ref([]);
  const isLoading = ref(true);

  if (cocktails.value.length > 0) {
    cocktails.value.length = 0;
  }

  const fetchCocktails = async () => {
    isLoading.value = true;

    if (cocktails.value.length > 0) {
      cocktails.value.length = 0;
    }

    try {
      const cocktailList = await fetcher();

      cocktailList.forEach((drink) => {
        cocktails.value.push(drink.drinks[0]);
      });

      isLoading.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  return { cocktails, isLoading, fetchCocktails };
};

export default useFetchCocktails;
