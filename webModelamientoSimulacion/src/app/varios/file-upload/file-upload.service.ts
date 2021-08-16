import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  // Returns an observable
  upload(file: File, api: string): Observable<any> {
    // Create form data
    const formData = new FormData();
    api = 'http://localhost:3030/api/' + api;

    // Store form name as "file" with file data
    formData.append('datos', file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(api, formData);
  }
}
