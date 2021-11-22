const { Transform } = require('stream')

process.stdout.write('child I started\n')

const upperCase = new Transform({
  transform(chunk, _, cb) {
    cb(null, chunk.toString().toUpperCase())
  }
})


process.stdin
  .pipe(upperCase)
  .pipe(process.stdout)


process.stdin.on('end', () => {console.log('end!')})
process.stdin.on('pause', () => {console.log('pause!')})
process.stdin.on('resume', () => {console.log('resumte!')})
process.stdin.on('close', () => {console.log('close!')})
