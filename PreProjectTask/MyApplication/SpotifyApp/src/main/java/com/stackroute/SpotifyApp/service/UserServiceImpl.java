package com.stackroute.SpotifyApp.service;

import com.stackroute.SpotifyApp.model.Song;
import com.stackroute.SpotifyApp.model.User;
import com.stackroute.SpotifyApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User addSongByEmailId(Song songs, String eid) {
        User user=userRepository.findById(eid).get();
        // add product object into current logged in user.songs
        // update user back to db
        user.getSongs().add(songs);
        return userRepository.save(user);
    }
}
