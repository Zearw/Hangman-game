
import './SecretWord.css'
import { useContext } from 'react'
import WordContext from '../../context/WordContext'
import { Letters } from '../Letters/Letters'

export function SecretWord () {
  const { hiddenWord, attemps, reset, result } = useContext(WordContext)

  const handleClick = (e) => {
    reset()
  }

  return (
    <div>
      <div className='secretWord'>
        <div className='secretWord_Hamburger'>
          <h2 className='hiddenWord'>
            {hiddenWord && <p className='guessWord'>{hiddenWord}</p>}
          </h2>
          <button className='refresh' onClick={handleClick}> <span> <img src='./images/arrow-repeat.svg' /></span> </button>
        </div>
      </div>
      <div>
        <div className='remaining_Attempts'><p> Intentos restantes {attemps}</p></div>
        <Letters />
      </div>
      {result && <p>{result}</p>}
    </div>
  )
}
