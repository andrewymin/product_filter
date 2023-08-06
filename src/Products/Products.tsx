import Card from "../components/Card";
import { CardInterface } from "../interfaces/types";

interface Props {
  query: string; // Replace 'string' with the actual type of your state
  filteredItems: CardInterface[];
}

function Products(props: Props) {
  return (
    <>
      <section className="card-container">
        {props.filteredItems.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            img={card.img}
            star={card.star}
            reviews={card.reviews}
            prevPrice={card.prevPrice}
            newPrice={card.newPrice}
            company={card.company}
            color={card.color}
            category={card.category}
          />
        ))}
      </section>
    </>
  );
}

export default Products;
