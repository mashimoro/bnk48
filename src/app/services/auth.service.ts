import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/model/auth-response';
import { Credential } from 'src/app/model/credential';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  // login:string , password:string
  authen(credential: Credential): Observable<AuthResponse> {
  return  this.http.post<AuthResponse>(`${environment.api_url}/auth/login`, credential);

  }

}
