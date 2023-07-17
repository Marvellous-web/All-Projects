package com.example.SoulMateService.service;

import com.example.SoulMateService.RabbitMQ.CommonUser;
import com.example.SoulMateService.RabbitMQ.Producer;
import com.example.SoulMateService.RabbitMQ.UserDTO;
import com.example.SoulMateService.RabbitMQ.UserDTONeo;
import com.example.SoulMateService.model.User;
import com.example.SoulMateService.repository.soulmateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class soulmateServiceImpl implements soulmateService{
    @Autowired
    private Producer producer;
    @Autowired
    private soulmateRepository soulRepo;
    @Override
    public User addUser(User user) {
        return soulRepo.save(user);
    }

    @Override
    public List<User> getUser() {
        return soulRepo.findAll();
    }

    @Override
    public User signUpUser(CommonUser commonUser){
        UserDTO userDTO=new UserDTO(commonUser.getEmailId(), commonUser.getPassword());
        UserDTONeo userDTONeo=new UserDTONeo(commonUser.getName(), commonUser.getAge(),commonUser.getGender(),commonUser.getCity(),commonUser.getEmailId());
        producer.sendEmailDtoToQueue(userDTO);
        producer.sendEmailDtoToQueue2(userDTONeo);
        User user=new User(commonUser.getEmailId(), commonUser.getName(),commonUser.getAge(),commonUser.getGender(),commonUser.getCity(),commonUser.getImage(),commonUser.getPassword());
        return soulRepo.save(user);

    }

    @Override
    public User findById(String id) {
        return soulRepo.findById(id).get();
    }
}
