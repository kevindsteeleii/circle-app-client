
export default class Example {
  constructor(name, def) {
    this.name = name;
    this.def = def;
  }

  

  getEntry (){ 
    return `${this.name}\n\t${this.def}`;
  }
}