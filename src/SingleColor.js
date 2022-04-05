import React, { useState,useEffect } from 'react'
import rgbToHex from './utils';


function SingleColor(rgb,weight,index,hexcolor) {
    const [alert,setAlert]=useState(false);
    const bcg=rgb.join(",")
    const hex=rgbToHex(...rgb);
    //spred operator 
  return (
    <div>

    </div>
  )
}

export default SingleColor