export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3100/cart", {
      method: "POST",
      body: JSON.stringify(item),

      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3100/cart?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}
export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3100/cart/"+update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function deleteItemFormCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3100/cart/"+itemId, {
      method: "DELETE",
      body: JSON.stringify(itemId),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data:{id:itemId} });
  });
}
