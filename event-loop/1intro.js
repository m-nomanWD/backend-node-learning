// code without offloading
console.log('start first task')
console.time()
for (var i = 0; i <= 100000000; i++) {
  // some code
}
console.timeEnd()
console.log('start next task')
