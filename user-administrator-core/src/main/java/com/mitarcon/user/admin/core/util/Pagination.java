package com.mitarcon.user.admin.core.util;

import org.springframework.data.domain.PageRequest;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Pagination {

  private Integer page;
  private Integer size;

  private PageRequest pageRequest;

  public Pagination() {
    page = 0;
    size = 10;
    pageRequest = PageRequest.of(page, size);
  }
  
  public Pagination(Integer page, Integer size) {
    this();
    this.page = page == null ? this.page : page;
    this.size = size == null ? this.size : size;

    pageRequest = PageRequest.of(this.page, this.size);
  }

  public void setPage(Integer page) {
    if (page != null) {
      this.page = page;
      pageRequest = PageRequest.of(page, size);
    }
  }

  public void setSize(Integer size) {
    if (size != null) {
      this.size = size;
      pageRequest = PageRequest.of(page, size);
    }
  }
}
