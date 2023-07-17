import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from './song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SongApp';
  constructor(private router:Router,private songService:SongService){
    this.getAllSongs();
  }

  logout(){
    localStorage.removeItem('jwt');
    alert("Logout successfull");
    this.router.navigateByUrl("/login");
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

}
