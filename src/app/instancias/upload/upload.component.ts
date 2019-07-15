import { Component, OnInit } from '@angular/core';
import { InstanciasService } from '../instancias.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private _instanciasService: InstanciasService) { }
  content: any;

  ngOnInit() {
  }

  onFilesAdded(files: File[]) {
    console.log(files);

    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent) => {
        this.content = (e.target as FileReader).result;
        // this content string could be used directly as an image source
        // or be uploaded to a webserver via HTTP request.

        console.log(typeof this.content);
      };

      this._instanciasService.uploadFile(this.content)
      .subscribe(x => console.log(x));
      // use this for basic text files like .txt or .csv
      reader.readAsText(file);

      // use this for images
      // reader.readAsDataURL(file);
    });
  }
}
