
import './SecretWord.css'
import { useContext } from 'react'
import WordContext from '../../context/WordContext'

export function SecretWord () {
  const { hiddenWord, attemps, reset } = useContext(WordContext)

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
          <button className='refresh' onClick={handleClick}><img src='./images/refresh_arrows_icon.ico' /> </button>
        </div>
      </div>
      <div className='remaining_Attempts'><p> Intentos restantes {attemps}</p></div>
    </div>
  )
}
