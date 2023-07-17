package com.stackroute.SpotifyApp.repository;

import com.stackroute.SpotifyApp.model.Song;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SongRepository extends MongoRepository<Song,String> {
}
