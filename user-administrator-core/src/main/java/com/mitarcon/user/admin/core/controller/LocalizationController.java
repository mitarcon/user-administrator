package com.mitarcon.user.admin.core.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitarcon.user.admin.core.model.Localization;
import com.mitarcon.user.admin.core.service.LocalizationService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping({"/localizations"})
public class LocalizationController {

  private LocalizationService localizationService;

  LocalizationController(LocalizationService localizationService) {
    this.localizationService = localizationService;
  }
  
  @GetMapping
  public List<Localization> findAll() {
    log.debug("LocalizationController:findAll");

    return localizationService.findAll();
  }
  
  @PostMapping
  public Localization create(@RequestBody Localization localization) {
    log.debug("LocalizationController:create localization: " + localization);

    return localizationService.create(localization);
  }
}
