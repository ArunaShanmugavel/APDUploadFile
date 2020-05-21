import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app4';
  isFileUploaded:boolean = false;
  uploadedFile:any;
  
  handleFileInput(inputfile :any){
    debugger;
    this.uploadedFile = inputfile;
    this.isFileUploaded = inputfile.length > 0 && this.uploadedFile[0].type =='text/plain';
  }
} 
