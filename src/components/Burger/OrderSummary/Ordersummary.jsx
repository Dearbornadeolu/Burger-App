import React from 'react'
import Aux from '../../../hoc/hoc'

const  Ordersummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
        return (
        <li>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>)
    })
  return (
    <Aux>
        <h1>Your Order</h1>
        <p>A delicious Burger with the following ingredients :</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to check out</p>
    </Aux>
  )
}
export default Ordersummary