package com.example.infomanagesystem.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import com.example.infomanagesystem.entity.User;
import com.example.infomanagesystem.mapper.UserMapper;
import com.example.infomanagesystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//User login and registration

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
    @Autowired
    private UserMapper studentMapper;

    @Override
    public User login(String username, String password) {
        QueryWrapper<User> q = new QueryWrapper<>();
        // Find user
        q.eq("username", username).eq("password", password);

        return studentMapper.selectOne(q);
    }

    @Override
    public boolean register(User student) { // Registration successful, also need to check if user already exists
        String username = student.getUsername();
        QueryWrapper<User> q = new QueryWrapper<>();
        q.eq("username", username);
        if (studentMapper.selectOne(q) != null) { // User exists
            return false;
        }
        // Add operation //User does not exist
        return studentMapper.insert(student) > 0;
    }

}
