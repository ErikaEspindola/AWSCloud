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

    let formData = new FormData();

    files.forEach(file => {
      const reader = new FileReader();

      formData.append('file', file, file.name);

      this._instanciasService.uploadFile(formData)
      .subscribe(x => console.log(x));
      // use this for basic text files like .txt or .csv
      reader.readAsText(file);

      // use this for images
      // reader.readAsDataURL(file);
    });
  }
}
