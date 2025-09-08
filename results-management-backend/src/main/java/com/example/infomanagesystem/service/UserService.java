package com.example.infomanagesystem.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.infomanagesystem.entity.User;

public interface UserService extends IService<User> {

     User login(String username, String password); // Login - check if user exists

     boolean register(User user); // User registration function

}
