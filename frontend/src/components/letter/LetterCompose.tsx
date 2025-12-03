import "./letterCompose.css"
import React from 'react'

const LetterCompose = () => {
  return (
    <>
      <div className="letter-compose-wrapper">
        <form className="letter-compose-container">
          <h1>new letter</h1>
          <span>title</span>
          <textarea name="" id="" className="letter-compose-input-title" placeholder="letter's title goes here"/>
          <span>details</span>
          <textarea name="" id="" className="letter-compose-input-details" placeholder="letter's details go here"/>
          <button type="submit">send</button>
        </form>
      </div>
    </>
  )
}

export default LetterCompose