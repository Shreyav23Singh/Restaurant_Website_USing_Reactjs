import { Fragment } from "react";
import DishesSummary from "./DishesSummary";
import AvailableMeals from "./DishesAvailability";



const Dishes = () =>{
    return(
        <Fragment>
        <DishesSummary/>
        <AvailableMeals/>
        </Fragment>
    )

}
export default Dishes;
