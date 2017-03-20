/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';

const initialConfigurations = {
	version: '0.2.0',
	configurations: [
		{
			type: 'stingray',
			request: 'launch',
			name: 'Stingray Debug',
			ip: "127.0.0.1",
			port: 14030
		}
	]
};

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('extension.stingray-debug.getProgramName', config => {
		return vscode.window.showInputBox({
			placeHolder: "Please enter the name of a markdown file in the workspace folder",
			value: "readme.md"
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('extension.stingray-debug.provideInitialConfigurations', () => {
		return [
			'// Use IntelliSense to learn about possible Stingray debug attributes.',
			'// Hover to view descriptions of existing attributes.',
			JSON.stringify(initialConfigurations, null, '\t')
		].join('\n');
	}));
}

export function deactivate() {
	// nothing to do
}
