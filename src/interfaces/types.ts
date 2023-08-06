export interface CardInterface {
    title: string;
    img?: string;
    star?: JSX.Element;
    reviews?: string | number;
    prevPrice?: string;
    newPrice: string;
    company?: string;
    color?: string;
    category: string;
    alt?: string;
  }
  
export interface PropsQuery {
    query?: string;
    setQuery?: React.Dispatch<React.SetStateAction<string>>; // Replace 'string' with the actual type of your state
    filteredItems?: CardInterface[];
  }