package com.mitarcon.user.admin.core.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;

import org.springframework.data.annotation.CreatedDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@MappedSuperclass
public abstract class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String email;
  private String phone;
  private Boolean status;

  @CreatedDate
  @Column(name = "created_on")
  private LocalDateTime createdOn;

  @Column(name = "update_on")
  private LocalDateTime updateOn;

  @PrePersist
  protected void prePersist() {
    if (this.createdOn == null)
      createdOn = LocalDateTime.now();

    if (this.updateOn == null)
      updateOn = LocalDateTime.now();
  }

  @PreUpdate
  protected void preUpdate() {
    this.updateOn = LocalDateTime.now();
  }

  @PreRemove
  protected void preRemove() {
    this.updateOn = LocalDateTime.now();
  }
}
