import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface IPhoto {
  url: string;
}

@Injectable()
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(searchQuery: string) {
    return this.http.get<Observable<IPhoto[]>>('http://localhost:4567/photos/search?q=' + searchQuery);
  }
}
