import Favorite from "./Favourite"
export default function FavouriteContainer(props){
    return(
        <section>
        <Favorite setFavorite={props.setFavorite} Favorite={props.Favorite}/>
    
        </section>
    )
}