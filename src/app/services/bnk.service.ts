import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/app/model/member';
import { Observable } from 'rxjs';
import { Feed } from 'src/app/model/feed';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  listBnk(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }
  instagram(id: string): Observable<Feed> {
    return this.http.get<Feed>(`${environment.instagram_api_url}${id}`);

  }
  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(`${environment.api_url}/bnk/members/${id}`);
  }
}
