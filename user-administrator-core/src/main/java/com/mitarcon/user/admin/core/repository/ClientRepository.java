package com.mitarcon.user.admin.core.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.mitarcon.user.admin.core.model.Client;
import com.mitarcon.user.admin.core.model.Localization;
import com.mitarcon.user.admin.core.model.Store;

@Repository
public interface ClientRepository extends PagingAndSortingRepository<Client, Long> {

  Page<Client> findByStore(Store store, Pageable pageable);

  Page<Client> findByLocalization(Localization localization, Pageable pageable);

  Page<Client> findByStoreAndLocalization(Store store, Localization localization,
      Pageable pageable);

  List<Client> findByStore(Store store);

  List<Client> findByLocalization(Localization localization);

  List<Client> findByStoreAndLocalization(Store store, Localization localization);
}
