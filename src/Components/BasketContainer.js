import Basket from "./Basket";


export default function BasketContainer(props){
    return(
        <section className="bg-white">
        <Basket setBasket={props.setBasket} basket={props.basket}/>
    
        </section>
    )
}