import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import DishItem from './DishesItems/DishesItems';
const DUMMY_MEALS =[
    {
        id:"e1",
        name :"Pizza",
        description:'Intensely cheesy flavor',
        price:499
    },
    {
        id:"e2",
        name :"Wow Momos",
        description:'Savory veggie filling ,lightly spiced',
        price:499
    },
    {
        id:"e3",
        name :"Burger",
        description:'Spicy delicious favour with french fries ',
        price:499
    },
    {
        id:"e4",
        name :"Pasta",
        description:'Broccoli, garlic and chilli flakes! - Spicy and Rich Flavor',
        price:499
    },
    {
        id:"e5",
        name :"Cappuccino",
        description:'A Cappuccino is like a hug in a mug',
        price:499
    },
]
const AvailableMeals = () => {
    const mealsList =DUMMY_MEALS.map((meal )=> <DishItem 
    key={meal.id}
    id={meal.id}
    name={meal.name} 
    description ={meal.description}  
    price={meal.price}/>);

    return (
        <section className={classes.meals}>
        <Card>
        <ul>
        {mealsList}
        </ul>
        </Card>
        
        </section>
    )

}

export default AvailableMeals;
