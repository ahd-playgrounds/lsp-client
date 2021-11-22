const { spawn } = require('child_process');

const child = spawn('node', ['io-server.js'])

process.stdin.pipe(child.stdin)

child.stderr.pipe(process.stderr)

child.stdout
	.pipe(process.stdout)

