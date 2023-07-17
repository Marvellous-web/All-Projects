package com.example.UserService.service;


import com.example.UserService.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator{

    @Override
    public Map<String, String> generateToken(User user) {
        Map<String,String> result=new HashMap<>();
        Map<String,Object> data=new HashMap<>();

        String str="2023-03-31";
        Date date=Date.valueOf(str);

        data.put("emailId",user.getEmailId());
//        data.put("role",user.getRole());  //or data.put("userObject",user);

        String jwtToken= Jwts.builder().setClaims(data).setExpiration(date).
                signWith(SignatureAlgorithm.HS512,"mysecurekey").compact();
        result.put("token",jwtToken);
        result.put("message","User successfully logged in");

        return result;
    }
}
