// 通过interface定义索引类型
interface IndexLanguage {
  // 表示索引必须为number类型，值必须为string类型
  [index: number]: string
}

const frontLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaSctipt",
  3: "Vue"
}

interface ILangugeYear {
  [name: string]: number
}
const languageYear = {
  "C": 1972,
  "java": 1995,
  "javascript": 1996,
  "typescript": 2014
}