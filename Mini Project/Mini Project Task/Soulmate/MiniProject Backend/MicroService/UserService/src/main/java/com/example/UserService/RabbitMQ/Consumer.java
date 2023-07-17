package com.example.UserService.RabbitMQ;

import com.example.UserService.model.User;
import com.example.UserService.service.UserService;
import org.springframework.amqp.rabbit.annotation.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
@Component
public class Consumer {
    @Autowired
    private UserService userService;
    @RabbitListener(queues = "user_queue")
    public void getDTOFromQueueAndAddToDB(UserDTO userDTO){
        User user=new User();
        user.setEmailId(userDTO.getEmailId());
        user.setPassword(userDTO.getPassword());
        userService.registerUser(user);
        System.out.println(userService.registerUser(user));
    }
}
