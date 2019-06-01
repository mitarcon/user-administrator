package com.mitarcon.user.admin.core.controller;

import java.util.List;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mitarcon.user.admin.core.model.Client;
import com.mitarcon.user.admin.core.model.User;
import com.mitarcon.user.admin.core.service.ClientService;
import com.mitarcon.user.admin.core.util.Pagination;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping({"/clients"})
public class ClientController {

  private ClientService clientService;

  ClientController(ClientService clientService) {
    this.clientService = clientService;
  }

  @GetMapping
  public List<Client> findPage(@RequestParam(required = false) Long store,
      @RequestParam(required = false) Long localization,
      @RequestParam(required = false) Integer page, @RequestParam(required = false) Integer size) {
    log.debug("ClientController:findPage page: " + page + "size: " + size + " store: " + store);

    return clientService.findUserByFilterAndPage(new Pagination(page, size), store, localization);
  }

  @GetMapping(value = "/report", produces = "application/pdf")
  public InputStreamResource report(@RequestParam(required = false) Long store,
      @RequestParam(required = false) Long localization) {
    log.debug("ClientController:report store: " + store + " localization: " + localization);

    return new InputStreamResource(clientService.generateReport(store, localization));
  }

  @GetMapping(path = {"/{id}"})
  public ResponseEntity<Client> findById(@PathVariable long id) {
    log.debug("ClientController:findById id: " + id);

    Client updated = clientService.findById(id);
    return updated == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(updated);
  }

  @PostMapping
  public User create(@RequestBody Client client) {
    log.debug("ClientController:create client: " + client.toString());

    return clientService.create(client);
  }

  @PutMapping(value = "/{id}")
  public ResponseEntity<Client> update(@PathVariable("id") Long id, @RequestBody Client client) {
    log.debug("ClientController:update id: " + id + " client: " + client);

    Client updated = clientService.update(id, client);
    return updated == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(updated);
  }

  @PostMapping(path = {"/{id}/status"})
  public ResponseEntity<Client> updateStatus(@PathVariable("id") Long id,
      @RequestBody Client client) {
    log.debug("ClientController:delete id: " + id + " client: " + client);

    Client updated = clientService.updateStatus(id, client.getStatus());
    return updated == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(updated);
  }


}
