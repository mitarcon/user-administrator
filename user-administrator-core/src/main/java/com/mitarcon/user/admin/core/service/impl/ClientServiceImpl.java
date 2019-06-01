package com.mitarcon.user.admin.core.service.impl;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.cactoos.list.ListOf;
import org.springframework.stereotype.Service;

import com.mitarcon.user.admin.core.model.Client;
import com.mitarcon.user.admin.core.model.Localization;
import com.mitarcon.user.admin.core.model.Store;
import com.mitarcon.user.admin.core.report.ClientReport;
import com.mitarcon.user.admin.core.repository.ClientRepository;
import com.mitarcon.user.admin.core.service.ClientService;
import com.mitarcon.user.admin.core.util.Pagination;

@Service
public class ClientServiceImpl implements ClientService {

  private ClientRepository clientRepository;

  ClientServiceImpl(ClientRepository clientRepository) {
    this.clientRepository = clientRepository;
  }

  @Override
  public List<Client> findUserByFilterAndPage(Pagination pagination, Long idStore,
      Long idLocalization) {
     
    List<Client> clients = null;
    
    // Validar para saber que consulta se debe disparar
    // Esto debe llevarse a ser generico al igual que el filterPage
    // lo veo como algo asi https://sgitario.github.io/how-to-map-filters-from-rest-api-to/
    
    if (null != idStore && null != idLocalization) {
      // Ambos parametros son validos
      clients =  clientRepository.findByStoreAndLocalization(Store.builder().id(idStore).build(),
           Localization.builder().id(idLocalization).build(), pagination.getPageRequest()).getContent();
      
    } else if (null != idStore && null == idLocalization) {
      // Solo store
      clients = clientRepository.findByStore(Store.builder().id(idStore).build(),
          pagination.getPageRequest()).getContent();
      
    } else if (null == idStore && null != idLocalization) {
      // Solo localizacion
      clients = clientRepository.findByLocalization(Localization.builder().id(idLocalization).build());
      
    } else {
      clients = clientRepository.findAll(pagination.getPageRequest()).getContent();
      
    }
    
    return clients;
  }

  @Override
  public ByteArrayInputStream generateReport(Long idStore, Long idlocalization) {

    List<Client> listToPrint;

    if (null != idStore && null != idlocalization) {
      // Filtar por store and localization
      listToPrint = clientRepository.findByStoreAndLocalization(Store.builder().id(idStore).build(),
          Localization.builder().id(idlocalization).build());

    } else if (null != idStore && null == idlocalization) {
      // Filtar por store
      listToPrint = clientRepository.findByStore(Store.builder().id(idStore).build());

    } else if (null != idStore && null != idlocalization) {
      // Filtar por localization
      listToPrint =
          clientRepository.findByLocalization(Localization.builder().id(idlocalization).build());

    } else {
      // Buscar todos los clientes
      listToPrint = new ListOf<>(clientRepository.findAll());

    }

    return ClientReport.generate(listToPrint);
  }

  @Override
  public Client findById(Long id) {
    return clientRepository.findById(id).isPresent() ? clientRepository.findById(id).get() : null;
  }

  @Override
  public Client update(Long id, Client client) {
    return clientRepository.findById(id).map(record -> {
      record.setName(client.getName());
      record.setEmail(client.getEmail());
      record.setPhone(client.getPhone());
      record.setStore(client.getStore());
      record.setLocalization(client.getLocalization());
      return clientRepository.save(record);
    }).orElse(null);
  }

  @Override
  public Client updateStatus(Long id, Boolean status) {
    return clientRepository.findById(id).map(record -> {
      record.setStatus(status);
      return clientRepository.save(record);
    }).orElse(null);
  }

  @Override
  public Client create(Client client) {
    return clientRepository.save(client);
  }

}
