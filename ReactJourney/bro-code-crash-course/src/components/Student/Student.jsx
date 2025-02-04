import React from 'react'
import propTypes from 'prop-types'


// defaultProps = default values for props in case they are not
//                passed from the parent component
//                name: "Guest"
//                age: 0
//                isStudent: false

const Student = ({name = "Guest", age = 0, isStudent = false }) => {

    //Boolean aren't typically displayed to the DOM

  return (
    <>
        <div className='card'>
            <p className='card-text'>Name: {name}</p>
            <p className='card-text'>Age: {age}</p>
            <p className='card-text'>Student Status: {isStudent ? 'Student' : 'Gradutated'}</p> 
        </div>
    </>
  )
}

//Provides a warning IF the type is what is not expect. Will not stop the function from running

Student.propTypes = {
    name : propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

export default Student