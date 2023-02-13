export interface PizzaItem{
    category:number[]
    description: string;
    id: string;
    imageUrl: string;
    price: number;
    rating: number;
    sizes: number[];
    title: string;
    types: number[];
    count: number;

  };


/*   export interface PizzaCardItem{
    category:number[]
    description: string;
    id: string;
    imageUrl: string;
    price: number;
    rating: number;
    sizes: number[];
    title: string;
    types: number[];
    count: number;
  }; */


  export interface PizzaSelectItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: number | string;
  size: number;
  count: number;
  rating?: number | string;
  description?: string;
  category:number
  };