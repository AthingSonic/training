class ClassWithGetSet {
    #msg = "hello world";
    get msg() {
      return this.#msg;
    }
    set msg(x) {
      this.#msg = `hello ${x}`;
    }
  }
  
  const instance = new ClassWithGetSet();
  console.log(instance.msg); // "hello world"
  
  instance.msg = "cake";
  console.log(instance.msg); // "hello cake"
  