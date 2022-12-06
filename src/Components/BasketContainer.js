import Basket from "./Basket";
import CheckOutForm from "./CheckOutForm";

export default function BasketContainer(props){
    return(
        <section className="bg-white">
        <Basket setBasket={props.setBasket} basket={props.basket}/>
    
        </section>
    )
}