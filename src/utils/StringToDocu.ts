//export class MyClass {
import fs from 'fs'
export function SaveDoc(_doc_name:string , _message:string){
    // Here we import the File System module of node
    //private fs = require('fs');
  //  constructor() { }
        fs.writeFile(_doc_name,  _message , function(err: any) {
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
