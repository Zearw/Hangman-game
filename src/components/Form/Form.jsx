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
      <label> Coloque una letra o la palabra entera</label>
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
        <button disabled={buttonSendInfo} type='submit'> Adivinar palabra </button>
      </div>
    </form>
  )
}
