import React from 'react'
import { useState } from 'react'

//React hook = Special function that allows functional components
//            to ues React features without writing class components (React v16.8)
//            (useState, useEffect, useContext, useReducer, useCallback, and more. . .)


//useState() = A React hook that allows the creation of a stateful variable
//             AND a setter function to update its value in the Virtual DOM.
//            [name, setName]


const HookAndState = () => {

  const [name, setName] = useState('No Name')
  const [age, setAge] = useState(0)

  const updateName = () => {
    setName("Spongebob")
  }

  const incrementAge = () => {
    setAge(age + 1)
  }


  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Name: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
      </div>
    </>
  )
}

export default HookAndState