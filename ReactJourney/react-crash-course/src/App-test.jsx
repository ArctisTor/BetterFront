import React from 'react'

export default function App() {

  const name = 'Perkins'

  const names = ['Brad', 'Mary', 'Joe', 'Sara'];
  const loggedIn = false;
  const styles = {
    color: 'red', 
    fontSize : '55px'
  }


  return (
    <>
      <div className="text-5xl font-bold underline">
        Hello world!
      </div>
      <div className='text-3xl' style={styles}>
        App author: {name} 
      </div>
      <div>
        Welcome to your Journey:
        <ul>
          { names.map((name, index) => (
            <li key={index}>{ name }</li>
          ))}
        </ul>
        {/* loggedIn ? <div> Hello Member </div> : <div> Hello guest </div> */}
        {loggedIn && <div> Hello Member </div>}
      </div>
    </>
  )
}