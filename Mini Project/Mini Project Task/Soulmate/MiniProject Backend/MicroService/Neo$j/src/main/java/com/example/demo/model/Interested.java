package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Interested {
    private int identity;
    private String name;
    private int age;
    private String gender;
    private String city;
    private String email;
}
