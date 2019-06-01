package com.mitarcon.user.admin.core.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Client extends User {

  @ManyToOne
  @JoinColumn(name = "fk_store")
  private Store store;
  
  @ManyToOne
  @JoinColumn(name = "fk_localization")
  private Localization localization;
}
