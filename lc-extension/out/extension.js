"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const vsls_1 = require("vsls");
const treeDataProvider_1 = require("./treeDataProvider");
const constants_1 = require("./constants");
const testTreeProvider_1 = require("./testTreeProvider");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const axios = require("axios").default;
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsls = (yield vsls_1.getApi());
        const treeDataProvider = new treeDataProvider_1.CountTreeDataProvider();
        const testTreeProvider = new testTreeProvider_1.treeDataTest();
        vsls.registerTreeDataProvider(vsls_1.View.Session, treeDataProvider);
        vsls.registerTreeDataProvider(vsls_1.View.Session, testTreeProvider);
        context.subscriptions.push(
        //handler
        vscode.commands.registerCommand(constants_1.INCREMENT_COUNT_COMMAND, () => {
            vscode.window.showInformationMessage(`Click on me!`);
        }), 
        //handler
        vscode.commands.registerCommand(constants_1.TEST, () => {
            vscode.window.showInformationMessage(`Friend was added!`);
            console.log("vsls1 -> ", vsls.getContacts);
            console.log("vsls2 -> ", vscode.EventEmitter);
        }));
        vsls.onDidChangePeers((e) => __awaiter(this, void 0, void 0, function* () {
            console.log("e ->", e);
            console.log("edded -> ", e.added);
            console.log("remove -> ", e.removed);
        }));
        vsls.onDidChangeSession((e) => __awaiter(this, void 0, void 0, function* () {
            let url = "https://localhost:44356/api/app/live-share-stream/init-live-share-stream/" + vsls.session.id;
            console.log("url -> ", url);
            // Make a request for sharing session link
            axios.post(url)
                .then((response) => {
                console.log(response);
                vscode.window.showInformationMessage(`Link Sharing`);
            }, (error) => {
                console.log(error);
            });
        }));
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map