import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../song.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private songService:SongService,private router:Router) {
    this.getLoginUser();
    this.getAllSongs();
  }

  ngOnInit(): void {
  }

  loginUserData:any;
  getLoginUser(){
    this.songService.getLoginUserDetails().subscribe(
      response=>{
        console.log(response);
        this.loginUserData=response;
      }
    )
  }

  songList:any;
  getAllSongs(){
    this.songService.getAllSongs().subscribe(
      response=>{
        this.songList=response;
        console.log(response);
      }
    )
  }

  addToPlaylist(songObj:any){
    this.songService.addSongToLoginUser(songObj).subscribe(
      response=>{
        this.getLoginUser();
        console.log(response);
      }
    )
  }

  playSong(songName:any){
    console.log(songName);
    alert(songName  + " Song playing");
  }

  logout(){
    localStorage.removeItem('jwt');
    alert("Signout successfull");
    this.router.navigateByUrl("/home");
  }


}
