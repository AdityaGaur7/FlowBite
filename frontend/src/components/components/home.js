import React from 'react'
import Carousel from '../common/carousal'
import Menscards from '../products/menproducts'
import Childcard from '../products/childproduct'
import Womencards from '../products/womenproducts'
const home = () => {
  return (
    <div>
      <Carousel/>
      <Menscards/>
      <Womencards/>
      <Childcard/>
      
    </div>
  )
}

export default home