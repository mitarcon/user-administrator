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
import com.fasterxml.jackson.annotation.JsonFormat;
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
  @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
  private LocalDateTime createdOn;

  @Column(name = "update_on")
  @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
  private LocalDateTime updateOn;

  @PrePersist
  protected void prePersist() {
    if (this.createdOn == null)
    	this.createdOn = LocalDateTime.now();

    if (this.updateOn == null)
    	this.updateOn = LocalDateTime.now();
    
    if (this.status == null)
    	this.status = true;
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
