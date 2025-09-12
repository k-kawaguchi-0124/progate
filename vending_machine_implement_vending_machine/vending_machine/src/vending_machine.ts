type DrinkType = "Milk" | "Cola" | "Beer";

type LogOptions = {
  status: "OK" | "NG";
  message: string;
};

const log = (options: LogOptions): void => {
  console.log(`${options.status} | ${options.message}`);
};

type DrinkStatus = {
  type: DrinkType;
  price: number;
  stock: number;
};

type RefillType = {
  type: string;
  quantity: number;
};


let Drinks: DrinkStatus[] = [
  {type: "Milk", price: 120, stock: 0},
  {type: "Cola", price: 150, stock: 0},
  {type: "Beer", price: 220, stock: 0}
]

function display(): void {
  console.log("# Display drinks #");
  for (let i = 0; i < Drinks.length; i++) {
    let stock: string = "";
    if (Drinks[i].stock === 0) {
      stock = "Sold out";
    } else {
      stock = "";
    }
    console.log(`${Drinks[i].type} | ${Drinks[i].price} | ${stock}`);
  }
}

function buy(type: string, pay: number): void {
  for (let i = 0; i < Drinks.length; i++) {
    if (type === Drinks[i].type && pay >= Drinks[i].price && Drinks[i].stock > 0) {
      Drinks[i].stock--;
      console.log(`OK | ${Drinks[i].type} purchased`);
      return;
    } else if (pay < Drinks[i].price) {
      console.log(`NG | Not enough paymentAmount for ${Drinks[i].type}`);
      return;
    } else if (Drinks[i].stock === 0) {
      console.log(`NG | ${Drinks[i].type} is sold out`);
      return;
    } else {
      continue;
    }
  }
  console.log(`NG | ${type} is not registered`)
}

function refill(refill: RefillType[]): void {
  for (let i = 0; i < refill.length; i++) {
    for (let j = 0; j < Drinks.length; j++) {
      if (refill[i].type === Drinks[j].type) {
        Drinks[j].stock += refill[i].quantity;
        console.log(`OK | ${refill[i].quantity} ${refill[i].type} have been refilled`)
        break;
      }
    }
  }
}

// class Drink {
//   category: DrinkType;
//   price: number;
//   stock: number;

//   constructor(category: DrinkType, price: number; stock: number) {
//     this.category = category;
//     this.price = price;
//     this.stock = stock;
//   }


// }


// Scenario
refill([
  { type: "Milk", quantity: 2 },
  { type: "Beer", quantity: 3 },
]);
display();
buy("Milk", 100);
buy("Milk", 200);
display();
buy("Cola", 200);
refill([
  { type: "Milk", quantity: 1 },
  { type: "Cola", quantity: 2 },
]);
display();
buy("Cola", 200);
display();

