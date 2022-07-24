class Animal {
  action() {
    console.log("animal running");
  }
}
class Dog extends Animal {
  action() {
    console.log("dog running");
  }
}
class Fish extends Animal {
  action() {
    console.log("fish swimming");
  }
}
// 多态的目的是为了写出更加具备通用性的代码
function makeAction(animal: Animal[]) {
  animal.forEach(animal => {
    animal.action()
  })
}
makeAction([new Dog(), new Fish()])
// dog running
// fish swimming

