const rpc = require( 'vscode-jsonrpc');


let connection = rpc.createMessageConnection(
	new rpc.StreamMessageReader(process.stdin),
	new rpc.StreamMessageWriter(process.stdout));

let notification = new rpc.NotificationType('testNotification');
connection.onNotification(notification, (param) => {
  console.log('server', param); // This prints Hello World
  connection.sendNotification()
});

connection.listen();
