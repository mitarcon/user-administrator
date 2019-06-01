package com.mitarcon.user.admin.core.service;

import java.util.List;

import com.mitarcon.user.admin.core.model.Store;
import com.mitarcon.user.admin.core.util.Pagination;

public interface StoreService {

  List<Store> findAll();

  List<Store> findPage(Pagination pagination);
  Store create(Store store);
  Store update(Long id, Store store);
  Store delete(Long id);
}
