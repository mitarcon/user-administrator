package com.mitarcon.user.admin.core.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.mitarcon.user.admin.core.model.Store;

public interface StoreRepository extends PagingAndSortingRepository<Store, Long> {

}
