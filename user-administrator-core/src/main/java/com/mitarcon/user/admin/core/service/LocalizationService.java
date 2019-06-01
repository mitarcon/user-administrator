package com.mitarcon.user.admin.core.service;

import java.util.List;

import com.mitarcon.user.admin.core.model.Localization;
import com.mitarcon.user.admin.core.util.Pagination;

public interface LocalizationService {

  List<Localization> findAll();

  List<Localization> findPage(Pagination pagination);

  Localization create(Localization localization);

  Localization update(Long id, Localization localization);

  Localization delete(Long id);
}
