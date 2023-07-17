package com.stackroute.SpotifyApp.service;

import com.stackroute.SpotifyApp.model.Song;
import com.stackroute.SpotifyApp.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongServiceImpl implements SongService {
    @Autowired
    private SongRepository songRepository;


    @Override
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    @Override
    public Song addSong(Song song) {
        return songRepository.save(song);
    }
}
