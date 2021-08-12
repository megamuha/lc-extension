import {
    Command,
    ProviderResult,
    TreeDataProvider,
    TreeItem,
    TreeItemCollapsibleState,
  } from "vscode";
import { INCREMENT_COUNT_COMMAND } from "./constants";


export class treeDataTest implements TreeDataProvider<Command> {

    private _commandForFirst: Command = {
        command: INCREMENT_COUNT_COMMAND,
        title: "Click on me!"
      };

  getChildren(element?: Command): ProviderResult<Command[]> {
    return Promise.resolve([this._commandForFirst]);
  }

  getTreeItem(element: Command): TreeItem {
    let treeItem = new TreeItem(`${element.title}`);
    treeItem.command = element;
    treeItem.collapsibleState = TreeItemCollapsibleState.Collapsed;
    treeItem.contextValue = 'liveshare.lc.test';
    return treeItem;
  }

}