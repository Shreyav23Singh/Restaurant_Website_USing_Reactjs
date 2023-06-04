import React from "react";
import classes from './DishesSummary.module.css';

const DishesSummary = () =>{
    return (
        <section  className={classes.summary}>
        <h2>Delectable cuisine brought right to your doorstep</h2>
        <p>Select your desired dish from our extensive array of savoury meals and indulge in an unparalleled dining experience 
        within the comfort of your own home, relishing a mouth-watering lunch or dinner.
        </p>
        
        <p>
        Our experienced culinary experts meticulously prepare each meal, utilizing only the finest, high-quality ingredients, cooked just in time to ensure a
        delectable dining experience.
        </p>
        </section>
        
    );

}
export default DishesSummary;
