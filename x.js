function a() {
  function b(lol) {
    console.log(lol.pop())
  }
  b(arguments)
}

a(1, 2, 3)