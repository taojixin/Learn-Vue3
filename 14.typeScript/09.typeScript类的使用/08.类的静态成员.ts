class Student {
  static time: string = '20.00'

  static attendCalss() {
    console.log("go studing");
  }
}
// 静态成员可以直接通过类调用
console.log(Student.time);
Student.attendCalss()
