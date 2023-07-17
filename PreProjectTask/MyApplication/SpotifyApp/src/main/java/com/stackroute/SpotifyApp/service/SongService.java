package com.stackroute.SpotifyApp.service;

import com.stackroute.SpotifyApp.model.Song;

import java.util.List;

public interface SongService {
    public abstract List<Song> getAllSongs();

    public abstract Song addSong(Song song);
}
