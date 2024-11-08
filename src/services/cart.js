async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(cart) {
  let total = 0;
  for (const item of cart) {
    total += item.subtotal();
  }
  return `Total: $${total.toFixed(2)}`;
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, index) {
  // Lógica de remoção aqui
}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
