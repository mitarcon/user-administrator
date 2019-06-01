package com.mitarcon.user.admin.core.service.impl;

import java.util.List;

import org.cactoos.list.ListOf;
import org.springframework.stereotype.Service;

import com.mitarcon.user.admin.core.model.Store;
import com.mitarcon.user.admin.core.repository.StoreRepository;
import com.mitarcon.user.admin.core.service.StoreService;
import com.mitarcon.user.admin.core.util.Pagination;

@Service
public class StoreServiceImpl implements StoreService {

  private StoreRepository storeRepository;

  StoreServiceImpl(StoreRepository storeRepository) {
    this.storeRepository = storeRepository;
  }

  @Override
  public List<Store> findAll() {
    return new ListOf<Store>(storeRepository.findAll());
  }

  @Override
  public List<Store> findPage(Pagination pagination) {
    return storeRepository.findAll(pagination.getPageRequest()).getContent();
  }

  @Override
  public Store create(Store store) {
    return storeRepository.save(store);
  }

  @Override
  public Store update(Long id, Store store) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Store delete(Long id) {
    // TODO Auto-generated method stub
    return null;
  }

}
