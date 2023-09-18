import React, { Fragment } from 'react';
import FoodSummary from './FoodSummary';
import AvailableFood from './AvailableFood';


const Food = ({foods , error , isLoading}) => {
  return (
    <Fragment>
      <FoodSummary/>
      <AvailableFood foods={foods} error={error} isLoading={isLoading}/>
    </Fragment>
  )
}

export default Food
