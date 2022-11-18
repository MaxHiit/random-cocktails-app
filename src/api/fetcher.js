const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const fetcher = async () => {
  try {
    const res = await Promise.all([
      fetch(API_URL),
      fetch(API_URL),
      fetch(API_URL),
    ]);

    const data = await Promise.all(res.map((r) => r.json()));

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetcher;
