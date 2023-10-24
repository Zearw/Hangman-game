
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
          <div><button className='refresh' onClick={handleClick}><img src='./images/arrow-repeat.svg' /></button></div>
          <div><img className='img_ahorcado' src={`./images/ahorcado/Ahorcado${attemps}.png`} /></div>
        </div>
      </div>
      <div>
        <Letters />
        <div className='remaining_Attempts'><p> Remaining attempts {attemps}</p></div>
      </div>
      {result && <p className='result'>{result}</p>}
    </div>
  )
}
