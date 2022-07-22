
function useState(state: any) {
  let currentState = state

  const changeState = (newState: any) => {
    currentState = newState
  }

  const tuple: [any, (newState: any) => void] = [currentState, changeState]

  return tuple
}

const [counter, setCounter] = useState(10) // counter: any ; setCounter: (newState: any) => void

export {}
