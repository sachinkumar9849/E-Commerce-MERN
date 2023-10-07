export function fetchProduct() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:3100/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  let queryString = '';
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3100/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
