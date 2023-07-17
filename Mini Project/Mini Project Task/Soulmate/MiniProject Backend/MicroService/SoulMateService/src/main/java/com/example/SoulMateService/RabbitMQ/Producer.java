package com.example.SoulMateService.RabbitMQ;

import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Producer {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    @Autowired
    private DirectExchange directExchange;

    public void sendEmailDtoToQueue(UserDTO userDTO){
        rabbitTemplate.convertAndSend(directExchange.getName(),"mail_binding",userDTO);
    }
    public void sendEmailDtoToQueue2(UserDTONeo userDTONeo)
    {
        rabbitTemplate.convertAndSend(directExchange.getName(),"mail_binding",userDTONeo);
    }
}
