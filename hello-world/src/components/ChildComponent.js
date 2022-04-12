import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Button</button>
    </div>
  )
}

export default ChildComponent
