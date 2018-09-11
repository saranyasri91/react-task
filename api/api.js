export const fetchJsonData = async () => {
  try {
    const getResponse = await fetch("https://api.myjson.com/bins/87lgk");
    const products = await getResponse.json();
    //console.log("fetchJsonData", products);
    return products;
  } catch (e) {
    console.log(e);
  }
};
