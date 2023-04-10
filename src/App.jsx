import { useState } from 'react'
import { words } from './service/word'

export function App () {
  const [inputUser, setInputUser] = useState('')
  /* const [word, setWord] = useState()

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?lang=es')
      .then(res => res.json())
      .then(data => setWord(data))
      .catch(err => console.log(err))
  }, []) */

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const randomWord = words[Math.floor(Math.random() * words.length)]
  const hiddenRandomWord = []
  const amountHiddenLetters = Math.floor(randomWord.length * 0.6)
  const hiddenIndex = []
  for (let i = 0; i < amountHiddenLetters; i++) {
    let aux = Math.floor(Math.random() * randomWord.length)
    while (hiddenIndex.find(e => e === aux) !== undefined) {
      aux = Math.floor(Math.random() * randomWord.length)
    }
    hiddenIndex[i] = aux
  }
  for (let i = 0; i < randomWord.length; i++) {
    if (hiddenIndex.find(e => e === i) !== undefined) {
      hiddenRandomWord[i] = '_'
    } else {
      hiddenRandomWord[i] = randomWord[i]
    }
  }

  return (
    <>
      <header>
        <h1>Juego del ahorcado</h1>
      </header>

      <main>
        <div>
          <h2 style={{ fontSize: ' 54px ' }}>
            {hiddenRandomWord.join(' ')}
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='inputUser'
            value={inputUser}
          />
          <button type='submit'> Adivinar palabra </button>
        </form>
      </main>
    </>
  )
}
