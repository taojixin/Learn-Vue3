interface Person {
  name: string
  eating: () => void
}
interface Animal {
  running: () => void
}
interface Student extends Person, Animal {
  sno: number
}

const stu: Student = {
  sno: 110,
  name: 'tjx',
  eating: function() {
  },
  running: function() {
  }
}

export {}