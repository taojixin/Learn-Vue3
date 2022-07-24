class Person {
  // public name: string = ''
  private name: string = ''
  getName() {
    return this.name
  }
  setName(newName) {
    this.name = newName
  }
}
const p = new Person()
// p.name = '123'
p.setName('123')


export {}