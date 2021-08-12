import * as vscode from 'vscode';
import { getApi, View } from "vsls";
import { CountTreeDataProvider } from "./treeDataProvider";
import {INCREMENT_COUNT_COMMAND, TEST} from "./constants";
import { treeDataTest } from './testTreeProvider';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const axios = require("axios").default;

export async function activate(context: vscode.ExtensionContext) {
  const vsls = (await getApi())!;

  const treeDataProvider = new CountTreeDataProvider();
  const testTreeProvider = new treeDataTest();
  vsls.registerTreeDataProvider(View.Session, treeDataProvider);
  vsls.registerTreeDataProvider(View.Session, testTreeProvider);

  context.subscriptions.push(
    //handler
    vscode.commands.registerCommand(INCREMENT_COUNT_COMMAND, () => {
      vscode.window.showInformationMessage(`Click on me!`);
    }),
      
    //handler
    vscode.commands.registerCommand(TEST, () => {
      vscode.window.showInformationMessage(`Friend was added!`);
      console.log("vsls1 -> ", vsls.getContacts);
      console.log("vsls2 -> ", vscode.EventEmitter);
    })
  );

  
  vsls.onDidChangePeers(async e => {
     console.log("e ->", e);
     console.log("edded -> ", e.added);
     console.log("remove -> ", e.removed);
    });

    vsls.onDidChangeSession(async e => {
      let url = "https://localhost:44356/api/app/live-share-stream/init-live-share-stream/" + vsls.session.id;
      console.log("url -> ", url);

       // Make a request for sharing session link
       axios.post(url)
       .then((response: any) => {
         console.log(response);
         vscode.window.showInformationMessage(`Link Sharing`);
       }, (error: any) => {
         console.log(error);
       });
     });
}

