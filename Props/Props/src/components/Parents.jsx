import React from 'react'
import Child1 from './Child1';

function Parents() {
    const name = "vini";
    const age  = 21;


  return (
   <>
   <h1>Parents Component</h1>
   <Child1 name={name} age={age} />
   </>
  )
}

export default Parents
