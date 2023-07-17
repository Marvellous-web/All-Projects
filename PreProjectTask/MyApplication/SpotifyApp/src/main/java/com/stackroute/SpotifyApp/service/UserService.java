package com.stackroute.SpotifyApp.service;

import com.stackroute.SpotifyApp.model.Song;
import com.stackroute.SpotifyApp.model.User;

public interface UserService {

    public abstract User addUser(User user);
    public abstract User getUserById(String id);
    public abstract User addSongByEmailId(Song songs, String eid);
}

