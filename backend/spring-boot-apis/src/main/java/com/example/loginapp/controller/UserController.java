package com.example.loginapp.controller;


import com.example.loginapp.dto.UserDTO;
import com.example.loginapp.mapper.UserMapper;
import com.example.loginapp.model.User;
import com.example.loginapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @PostMapping("/register")
    public UserDTO registerUser(@RequestBody UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        User savedUser = userService.saveUser(user);
        return userMapper.toDTO(savedUser);
    }

    // @PostMapping("/login")
    // public UserDTO loginUser(@RequestBody UserDTO userDTO) {
    //     User user = userService.findByUsername(userDTO.getUsername());
    //     if (user != null && user.getPassword().equals(userDTO.getPassword())) {
    //         return userMapper.toDTO(user);
    //     }
    //     return null;
    // }
}
