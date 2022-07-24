interface Colorful {
  color: string
}
interface IRun {
  running: () => void
}
type NewType = Colorful & IRun
const obj: NewType = {
  color: 'red',
  running: function() {
    
  }
}