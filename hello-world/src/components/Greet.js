import React from 'react'

const Greet = (props) => {
  const { name, heroName } = props
  // const {state1, state2} = this.state
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  )
}

export default Greet
