import productOne from "./assets/images/product-1.png";
import productTwo from "./assets/images/product-2.jpg";

export interface IChartData {
  name: string;
  Gross: number;
  Nett: number;
  APV: number;
  UPT: number;
}

export const chartData: IChartData[] = [
  {
    name: "Jan 12",
    Gross: 26000,
    Nett: 24500,
    APV: 23000,
    UPT: 10.58,
  },
  {
    name: "Tue",
    Gross: 22500,
    Nett: 21000,
    APV: 20000,
    UPT: 9.24,
  },
  {
    name: "Wed",
    Gross: 20000,
    Nett: 18000,
    APV: 17000,
    UPT: 8.98,
  },
  {
    name: "Thu",
    Gross: 21000,
    Nett: 19000,
    APV: 17000,
    UPT: 7.98,
  },
  {
    name: "Fri",
    Gross: 22000,
    Nett: 20000,
    APV: 18000,
    UPT: 8.47,
  },
  {
    name: "Sat",
    Gross: 22500,
    Nett: 21500,
    APV: 20500,
    UPT: 9.24,
  },
  {
    name: "Sun",
    Gross: 23500,
    Nett: 21000,
    APV: 20000,
    UPT: 9.24,
  },
];

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

export const filters = [
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last 30 days",
  "This Month",
  "Custom",
] as const;
export type FilterType = typeof filters[number];

export const dropdownData = [
  "Last 1 Week",
  "Last 1 Month",
  "Last 3 Months",
  "Last 6 Months",
  "Last 1 Year",
] as const;
export type PeriodType = typeof dropdownData[number];
