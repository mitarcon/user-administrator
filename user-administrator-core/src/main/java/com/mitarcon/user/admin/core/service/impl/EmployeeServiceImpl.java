package com.mitarcon.user.admin.core.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mitarcon.user.admin.core.model.Employee;
import com.mitarcon.user.admin.core.repository.EmployeeRepository;
import com.mitarcon.user.admin.core.service.EmployeeService;
import com.mitarcon.user.admin.core.util.Pagination;

@Service
public class EmployeeServiceImpl implements EmployeeService {

  private EmployeeRepository employeeRepository;

  EmployeeServiceImpl(EmployeeRepository employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  @Override
  public List<Employee> findPage(Pagination pagination) {
    return employeeRepository.findAll(pagination.getPageRequest()).getContent();
  }

  @Override
  public Employee create(Employee employee) {
    return employeeRepository.save(employee);
  }

  @Override
  public Employee update(Long id, Employee employee) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Employee delete(Long id) {
    // TODO Auto-generated method stub
    return null;
  }

}
