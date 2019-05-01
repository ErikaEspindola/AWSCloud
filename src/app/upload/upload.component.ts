import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFilesAdded(files: File[]) {
    console.log(files);
  
    files.forEach(file => {
      const reader = new FileReader();
  
      reader.onload = (e: ProgressEvent) => {
        const content = (e.target as FileReader).result;
  
        // this content string could be used directly as an image source
        // or be uploaded to a webserver via HTTP request.
        console.log(content);
      };
  
      // use this for basic text files like .txt or .csv
      reader.readAsText(file);
  
      // use this for images
      // reader.readAsDataURL(file);
    });
  }
}
