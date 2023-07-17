package com.example.demo.RabbitMQ;

import com.example.demo.model.Person;
import com.example.demo.service.PersonService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private PersonService personService;
    @RabbitListener(queues = "user_queue")
    public void getDTOFromQueueAndAddToDB(UserDTONeo userDTONeo){
        Person person=new Person();
        person.setName(userDTONeo.getName());
        person.setAge(userDTONeo.getAge());
        person.setGender(userDTONeo.getGender());
        person.setCity(userDTONeo.getCity());
        person.setEmailId(userDTONeo.getEmailId());
        personService.saveUser(person);
        System.out.println(personService.saveUser(person));
    }
}
