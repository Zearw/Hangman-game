const WORD_ENPOINT_RANDOM = 'https://random-word-api.herokuapp.com/word'

export const getRandomWord = async () => {
  const res = await fetch(WORD_ENPOINT_RANDOM)
  const data = await res.json()
  const word = data[0].toLowerCase()
  return word
}
