import {
  Command,
  ProviderResult,
  TreeDataProvider,
  TreeItem
} from "vscode";
 import * as vsls from "vsls";

import { TEST } from "./constants";

export class CountTreeDataProvider implements TreeDataProvider<Command> {

  private _commandForTest: Command = {
    command: TEST,
    title: "ADD Friend"
  };

  getChildren(element?: Command): ProviderResult<Command[]> {
    return Promise.resolve([this._commandForTest]);
  }

  getTreeItem(element: Command): TreeItem {
     const api = ( vsls.getApi())!;
     console.log(api);
    let treeItem = new TreeItem(`${element.title}`);
    treeItem.command = element;
    return treeItem;
  }

}
