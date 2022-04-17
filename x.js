let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
  describeProduct() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  },
  priceChange(price) {
    if (price < 0) return "nah wrong number";
    this.price = price;
  }
};

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
  describeProduct() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  },
  priceChange(price) {
    if (price < 0) return "nah wrong number";
    this.price = price;
  }
};

function factory(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describeProduct() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
    priceChange(price) {
      if (price < 0) return "nah wrong number";
      this.price = price;
    }
  }
}

drill.priceChange(19)
drill.describeProduct()