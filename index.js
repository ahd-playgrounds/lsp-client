const { join } = require("path");
const { spawn } = require("child_process");

// sample request sent from emacs-lsp to initialize a connection
const s =
  'Content-Length: 2632\r\n\r\n{"jsonrpc":"2.0","method":"initialize","params":{"processId":null,"rootPath":"/Users/adh23/dev/pomo","clientInfo":{"name":"emacs","version":"GNU Emacs 28.0.50 (build 2, x86_64-apple-darwin20.6.0, NS appkit-2022.60 Version 11.5.2 (Build 20G95))\\n of 2021-08-27"},"rootUri":"file:///Users/adh23/dev/pomo","capabilities":{"workspace":{"workspaceEdit":{"documentChanges":true,"resourceOperations":["create","rename","delete"]},"applyEdit":true,"symbol":{"symbolKind":{"valueSet":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]}},"executeCommand":{"dynamicRegistration":false},"workspaceFolders":true,"configuration":true,"fileOperations":{"didCreate":false,"willCreate":false,"didRename":false,"willRename":false,"didDelete":false,"willDelete":false}},"textDocument":{"declaration":{"linkSupport":true},"definition":{"linkSupport":true},"implementation":{"linkSupport":true},"typeDefinition":{"linkSupport":true},"synchronization":{"willSave":true,"didSave":true,"willSaveWaitUntil":true},"documentSymbol":{"symbolKind":{"valueSet":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},"hierarchicalDocumentSymbolSupport":true},"formatting":{"dynamicRegistration":true},"rangeFormatting":{"dynamicRegistration":true},"rename":{"dynamicRegistration":true,"prepareSupport":true},"codeAction":{"dynamicRegistration":true,"isPreferredSupport":true,"codeActionLiteralSupport":{"codeActionKind":{"valueSet":["","quickfix","refactor","refactor.extract","refactor.inline","refactor.rewrite","source","source.organizeImports"]}},"resolveSupport":{"properties":["edit","command"]},"dataSupport":true},"completion":{"completionItem":{"snippetSupport":true,"documentationFormat":["markdown","plaintext"],"resolveAdditionalTextEditsSupport":true,"insertReplaceSupport":true,"resolveSupport":{"properties":["documentation","details","additionalTextEdits","command"]},"insertTextModeSupport":{"valueSet":[1,2]}},"contextSupport":true},"signatureHelp":{"signatureInformation":{"parameterInformation":{"labelOffsetSupport":true}}},"documentLink":{"dynamicRegistration":true,"tooltipSupport":true},"hover":{"contentFormat":["markdown","plaintext"]},"foldingRange":{"dynamicRegistration":true},"callHierarchy":{"dynamicRegistration":false},"publishDiagnostics":{"relatedInformation":true,"tagSupport":{"valueSet":[1,2]},"versionSupport":true},"moniker":null,"linkedEditingRange":null},"window":{"workDoneProgress":true,"showMessage":null,"showDocument":null}},"initializationOptions":{"plugins":[],"logVerbosity":null,"tsServerPath":"/Users/adh23/dev/pomo/node_modules/.bin/tsserver"},"workDoneToken":"1"},"id":1}\n';

const tsc = "/Users/adh23/dev/typescript-language-server/lib/cli.js";

const spawned = spawn("typescript-language-server", [
  // const spawned = spawn("node", [
  //   tsc,
  "--stdio",
  "--log-level",
  "1",
  "--tsserver-log-file",
  join(__dirname, "./ts-logs.txt"),
  "--tsserver-log-verbosity",
  "info",
  "--tsserver-path",
  "/Users/adh23/dev/pomo/node_modules/.bin/tsserver",
]);
// const spawned = spawn('typescript-language-server', ['--help']);

const logger = true;

spawned.on("close", (code) => {
  console.log("code: ", code);
  console.log("done!\n\n");
});

spawned.on("error", (e) => {
  console.error(e);
});

spawned.stdout.pipe(process.stdout);

spawned.stderr.pipe(process.stderr);

spawned.stdin.write(s);
// spawned.stdin.end();
