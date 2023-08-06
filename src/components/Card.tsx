// import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { CardInterface } from "../interfaces/types";

// add loop for stars to appear for number of reviews later

function Card(props: CardInterface) {
  return (
    <section className="card">
      <img src={props.img} alt="Shoe" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{props.title}</h3>
        <section className="card-reviews">
          {props.star}
          {props.star}
          {props.star}
          {props.star}
          <span className="total-reviews">{props.reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{props.prevPrice}</del> {props.newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
