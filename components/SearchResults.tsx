import { ProductItem } from "./ProductItem";

type SearchResults = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
};

export function SearchResults({ results }: SearchResults) {
  return (
    <div>
      {results.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
}
