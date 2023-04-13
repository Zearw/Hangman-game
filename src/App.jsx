import { useWord } from './hooks/useWord'
import { useHiddenWord } from './hooks/useHiddenWord'
import { useErrorInput } from './hooks/useError'

export function App () {
  const { answer, refreshAnswer } = useWord()
  const { hiddenWord } = useHiddenWord(answer)
  const { error, inputUser, setInputUser } = useErrorInput({ hiddenWord })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

  const handleChange = (event) => {
    const newInput = event.target.value
    if (newInput.startsWith(' ')) return
    setInputUser(newInput)
  }
  const handleClick = async () => {
    refreshAnswer()
  }

  return (
    <>
      <header>
        <h1>Juego del ahorcado</h1>
      </header>

      <main>
        <div>
          <h2 style={{ fontSize: ' 54px ' }}>
            {hiddenWord && <p>{hiddenWord}</p>}
          </h2>
          <button onClick={handleClick}> Cambiar palabra </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label> Coloque una letra o la palabra entera</label>
          <input
            type='text'
            name='inputUser'
            value={inputUser}
            onChange={handleChange}
          />
          <button type='submit'> Adivinar palabra </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </main>
    </>
  )
}
