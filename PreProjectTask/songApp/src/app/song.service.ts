import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient:HttpClient) { }

  songBaseUrl="http://localhost:3333/all-songs";

  userBaseUrl="http://localhost:3333/user-song-app";

  getAllSongs(){
    return this.httpClient.get(this.songBaseUrl+"/get-all-songs")
  }

  getLoginUserDetails(){
    let httpHeader=new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('jwt')
     });
     let requestOption={headers:httpHeader}
    return this.httpClient.get(this.userBaseUrl+"/get-login-user-details",requestOption);
  }

  addSongToLoginUser(songData:any){
    let httpHeader=new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('jwt')
     });
     let requestOption={headers:httpHeader}
    return this.httpClient.post(this.userBaseUrl+"/add-song-to-login-user",songData,requestOption);
  }
}
