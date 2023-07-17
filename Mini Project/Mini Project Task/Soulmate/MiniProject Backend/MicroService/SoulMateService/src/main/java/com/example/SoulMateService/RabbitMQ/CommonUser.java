package com.example.SoulMateService.RabbitMQ;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class CommonUser {
    public String emailId,name,age,gender,city,image,password;

}
