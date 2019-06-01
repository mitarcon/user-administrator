package com.mitarcon.user.admin.core.service.impl;

import java.util.List;

import org.cactoos.list.ListOf;
import org.springframework.stereotype.Service;

import com.mitarcon.user.admin.core.model.Localization;
import com.mitarcon.user.admin.core.repository.LocalizationRepository;
import com.mitarcon.user.admin.core.service.LocalizationService;
import com.mitarcon.user.admin.core.util.Pagination;

@Service
public class LocalizationServiceImpl implements LocalizationService {

  private LocalizationRepository localizationRepository;

  LocalizationServiceImpl(LocalizationRepository localizationRepository) {
    this.localizationRepository = localizationRepository;
  }

  @Override
  public List<Localization> findAll() {
    return new ListOf<Localization>(localizationRepository.findAll());
  }

  @Override
  public List<Localization> findPage(Pagination pagination) {
    return localizationRepository.findAll(pagination.getPageRequest()).getContent();
  }

  @Override
  public Localization create(Localization localization) {
    return localizationRepository.save(localization);
  }

  @Override
  public Localization update(Long id, Localization localization) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Localization delete(Long id) {
    // TODO Auto-generated method stub
    return null;
  }

}
