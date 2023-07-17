import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private songService:SongService) {
    this.getAllSongs();

  }

  ngOnInit(): void {
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
