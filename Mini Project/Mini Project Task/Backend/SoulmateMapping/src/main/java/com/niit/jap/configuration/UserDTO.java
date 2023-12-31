package com.niit.jap.configuration;



public class UserDTO {
    private String name;
    private int age;

    private String city;
    private String gender;
    private String email;

    private String password;

    public UserDTO() {
    }

    public UserDTO(String name, int age, String city, String gender, String email, String password) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.gender = gender;
        this.email = email;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
