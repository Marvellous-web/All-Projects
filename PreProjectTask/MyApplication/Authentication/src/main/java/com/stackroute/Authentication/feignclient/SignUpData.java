package com.stackroute.Authentication.feignclient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SignUpData {
    private String emailId,password,name,mobileNo;
}
