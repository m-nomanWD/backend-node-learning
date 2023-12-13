const { readFile, writeFile } = require('fs').promises

const action = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    console.log(first, second)
    await writeFile(
      './content/writeWithPromise.txt',
      `The text is following: ${first} ${second}`,
      { flag: 'a' }
    )
  } catch (error) {
    console.log(error)
  }
}
action()
