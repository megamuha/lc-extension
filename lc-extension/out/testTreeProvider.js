"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const constants_1 = require("./constants");
class treeDataTest {
    constructor() {
        this._commandForFirst = {
            command: constants_1.INCREMENT_COUNT_COMMAND,
            title: "Click on me!"
        };
    }
    getChildren(element) {
        return Promise.resolve([this._commandForFirst]);
    }
    getTreeItem(element) {
        let treeItem = new vscode_1.TreeItem(`${element.title}`);
        treeItem.command = element;
        treeItem.collapsibleState = vscode_1.TreeItemCollapsibleState.Collapsed;
        treeItem.contextValue = 'liveshare.lc.test';
        return treeItem;
    }
}
exports.treeDataTest = treeDataTest;
//# sourceMappingURL=testTreeProvider.js.map