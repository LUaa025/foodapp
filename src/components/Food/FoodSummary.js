import React from 'react'
import classes from './FoodSummary.module.css';

const FoodSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Leckeres Essen wird zu Ihnen geliefert</h2>
      <p>
        Sie können Ihre lieblinges Essen wählen und auch bestellen 
      </p>
      <p>
        alle Gerichte sind lecker und wurde verschiedene Arten von Gemüse und Obst verwendet um ein
        leckeres Gericht anzubieten .
      </p>
    </section>
  )
}

export default FoodSummary
