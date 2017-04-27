import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  upload() {

  }

  handleFile(e) {
    var files = e.target.files;
    var f = files[0];
    var reader = new FileReader();
    var name = f.name;
    var sasddas = 0;
  }
}
