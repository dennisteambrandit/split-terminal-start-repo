// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Split the terminal upon activation
  splitTerminal();

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "split-terminal" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "split-terminal.splitTerminal",
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Terminal has been split");
    }
  );

  context.subscriptions.push(disposable);
}

function splitTerminal() {
    // Ensure there is an active terminal to split
    if (vscode.window.terminals.length === 0) {
        const terminal = vscode.window.createTerminal();
        terminal.show();
    }
    
    // Wait a short period to ensure the terminal is ready
    setTimeout(() => {
        vscode.commands.executeCommand('workbench.action.terminal.split');
    }, 1000); // Adjust the delay as necessary
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
