package com.mitarcon.user.admin.core.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitarcon.user.admin.core.model.User;
import com.mitarcon.user.admin.core.repository.UserRepository;


@RestController
@RequestMapping({"/users"})
public class UserController {

  private UserRepository repository;

  UserController(UserRepository userRepository) {
    this.repository = userRepository;
  }

  @GetMapping
  public List<User> findAll() {
    return repository.findAll();
  }

  @GetMapping(path = {"/{id}"})
  public ResponseEntity<User> findById(@PathVariable long id) {
    return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
        .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public User create(@RequestBody User user) {
    return repository.save(user);
  }

  @PutMapping(value = "/{id}")
  public ResponseEntity<User> update(@PathVariable("id") long id, @RequestBody User user) {
    return repository.findById(id).map(record -> {
      record.setName(user.getName());
      record.setEmail(user.getEmail());
      record.setPhone(user.getPhone());
      User updated = repository.save(record);
      return ResponseEntity.ok().body(updated);
    }).orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping(path = {"/{id}"})
  public ResponseEntity<?> delete(@PathVariable("id") long id) {
    return repository.findById(id).map(record -> {
      repository.deleteById(id);
      return ResponseEntity.ok().build();
    }).orElse(ResponseEntity.notFound().build());
  }

}
