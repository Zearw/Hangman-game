import { useEffect, useState } from 'react'

export function useHandleResult ({ attemps, success }) {
  const [result, setResult] = useState('')

  useEffect(() => {
    if (attemps === 0) {
      setResult('¡Perdiste! Se te acabaron los intentos.')
    }
    if (success) {
      setResult('!Felicidades, adivinaste la palabra!')
    }
  }, [attemps, success])
  return { result, setResult }
}
