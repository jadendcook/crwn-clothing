import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

// createContext is a special function that gives you a special object
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  // useState is a function that returns an updatable variable and the function to update it
  //  the value passed to useState is the first/default value of the updatable variable
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
