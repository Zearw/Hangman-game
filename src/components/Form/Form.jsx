import './Form.css'
import { useContext } from 'react'
import WordContext from '../../context/WordContext'

export function Form () {
  const { modifyInput, modifyInputCheck, inputUser, error, buttonSendInfo } = useContext(WordContext)

  const handleSubmit = (e) => {
    modifyInputCheck(e)
  }

  const handleChange = (e) => {
    modifyInput(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter a letter or the whole word</label>
      <input
        autoFocus
        type='text'
        name='inputUser'
        value={inputUser}
        onChange={handleChange}
        autoComplete='off'
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button disabled={buttonSendInfo}> Guess word </button>
      </div>
    </form>
  )
}
