type NameType = {
  name: string
}
function sayHello(this: NameType) {
  console.log(this.name);
}