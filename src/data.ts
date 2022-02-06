import productOne from "./assets/images/product-1.png";
import productTwo from "./assets/images/product-2.jpg";

export interface IProduct {
  name: string;
  price: number;
  sold: number;
  img: string;
}

export const bestSKU: IProduct[] = [
  {
    name: "product One",
    price: 1000,
    sold: 100,
    img: productOne,
  },
  {
    name: "product Two",
    price: 1000,
    sold: 100,
    img: productTwo,
  },
  {
    name: "product Three",
    price: 1000,
    sold: 100,
    img: productTwo,
  },
  {
    name: "product Four",
    price: 1000,
    sold: 100,
    img: productTwo,
  },
  {
    name: "product Five",
    price: 1000,
    sold: 100,
    img: productTwo,
  },
];
