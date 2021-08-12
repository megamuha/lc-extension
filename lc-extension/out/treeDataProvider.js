"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const vsls = require("vsls");
const constants_1 = require("./constants");
class CountTreeDataProvider {
    constructor() {
        this._commandForTest = {
            command: constants_1.TEST,
            title: "ADD Friend"
        };
    }
    getChildren(element) {
        return Promise.resolve([this._commandForTest]);
    }
    getTreeItem(element) {
        const api = (vsls.getApi());
        console.log(api);
        let treeItem = new vscode_1.TreeItem(`${element.title}`);
        treeItem.command = element;
        return treeItem;
    }
}
exports.CountTreeDataProvider = CountTreeDataProvider;
//# sourceMappingURL=treeDataProvider.js.map