"use strict";
exports.__esModule = true;
exports.SaveDoc = void 0;
//export class MyClass {
var fs_1 = require("fs");
function SaveDoc(_doc_name, _message) {
    // Here we import the File System module of node
    //private fs = require('fs');
    //  constructor() { }
    fs_1["default"].writeFile(_doc_name, _message, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("File created!");
    });
    // showFile() {
    //     this.fs.readFile('file.txt', function (err: any, data: { toString: () => string; }) {
    //         if (err) {
    //             return console.error(err);
    //         }
    //         console.log("Asynchronous read: " + data.toString());
    //     });
    // }
    //}
}
exports.SaveDoc = SaveDoc;
