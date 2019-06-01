package com.mitarcon.user.admin.core.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitarcon.user.admin.core.model.Store;
import com.mitarcon.user.admin.core.service.StoreService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping({"/stores"})
public class StoreController {
  
  private StoreService storeService;

  StoreController(StoreService storeService) {
    this.storeService = storeService;
  }

  @GetMapping
  public List<Store> findAll() {
    log.debug("StoreController:findAll");
    return storeService.findAll();
  }

  @PostMapping
  public Store create(@RequestBody Store store) {
    log.debug("StoreController:create store: " + store.toString());
    return storeService.create(store);
  }
}
