import React from 'react'
import "../styles/letterBox.css"
import LetterMini from "../../../components/letter/LetterMini";


const LetterBox = () => {
  return (
    <>
      <div className="letterbox-wrapper">
        <div className="letterbox-container">
          <div className="letterbox-list">
            <LetterMini/>

          </div>
        </div>
      </div>
    </>
  )
}

export default LetterBox