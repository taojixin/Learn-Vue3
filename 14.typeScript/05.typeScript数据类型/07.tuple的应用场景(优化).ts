function useState<T>(state: T) {
  let currentState = state

  const changeState = (newState: T) => {
    currentState = newState
  }

  const tuple: [T, (newState: T) => void] = [currentState, changeState]

  return tuple
}

const [counter, setCounter] = useState(10) // counter: number;setNuber: (newState: number) => void
const [title, setTitle] = useState("abc")  // title: string ; setTitle: (newState: string) => void
