import React from 'react';
import classes from './AvailableFood.module.css';
import Card from '../UI/Card';
import FoodItem from './FoodItem/FoodItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Tajine',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Couscous',
      description: 'A marocco specialty!',
      price: 40.5,
    },
    {
      id: 'm3',
      name: 'Tee',
      description: 'A marocco specialty!',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableFood = ({foods , isLoading , error}) => {
    const foodList = foods.map(food =><FoodItem key={food.id}  
                                                    id ={food.id}
                                                     name={food.name} 
                                                     description={food.description} 
                                                     price={food.price} />);

  return (
    <section className={classes.foods}>

        <Card>
        <ul>
            {foodList}
        </ul>
        </Card>
      
    </section>
  )
}

export default AvailableFood
