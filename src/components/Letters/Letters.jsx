import { useContext } from 'react'
import WordContext from '../../context/WordContext'
import './Letters.css'
import { letters } from '../../service/letters.json'

export function Letters () {
  const { inputCheck } = useContext(WordContext)

  if (inputCheck !== '') {
    letters.forEach(letter => {
      if (letter.letter === inputCheck) {
        letter.checked = true
      }
    })
  }

  return (
    <div className='grid_letters'>
      {letters.map((letra, i) => {
        return (
          <div className={letra.checked ? 'letter_used' : 'letter'} key={i}>{letra.letter}</div>
        )
      })}
    </div>
  )
}
