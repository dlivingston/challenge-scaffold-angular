import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ChorusesService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getChoruses(): Observable<any[]> {
    return this.http.get<any>(this.dataUrl).pipe(map(response => response.choruses));
  }
}
