package com.mitarcon.user.admin.core.service;

import java.util.List;

import com.mitarcon.user.admin.core.model.Employee;
import com.mitarcon.user.admin.core.util.Pagination;

public interface EmployeeService {

  List<Employee> findPage(Pagination pagination);

  Employee create(Employee employee);

  Employee update(Long id, Employee employee);

  Employee delete(Long id);
}
