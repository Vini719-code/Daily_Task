import React from 'react'
import Child2 from './Child2'

function Child1(props) {
  return (
   <>
   <h2>Child1 Component</h2>
   <Child2 name={props.name} age={props.age} />
   </>
  )
}

export default Child1
