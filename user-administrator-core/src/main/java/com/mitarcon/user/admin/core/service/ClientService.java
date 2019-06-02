package com.mitarcon.user.admin.core.service;

import java.io.ByteArrayInputStream;
import java.util.List;
import org.springframework.data.domain.Page;
import com.mitarcon.user.admin.core.model.Client;
import com.mitarcon.user.admin.core.util.Pagination;

public interface ClientService {

  Page<Client> findUserByFilterAndPage(Pagination filter, Long idStore, Long idLocalization);

  ByteArrayInputStream generateReport(Long idStore, Long idlocalization);

  Client findById(Long id);

  Client create(Client client);

  Client update(Long id, Client client);

  Client updateStatus(Long id, Boolean status);
}
