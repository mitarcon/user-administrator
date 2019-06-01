package com.mitarcon.user.admin.core.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mitarcon.user.admin.core.model.Employee;
import com.mitarcon.user.admin.core.service.EmployeeService;
import com.mitarcon.user.admin.core.util.Pagination;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping({"/employees"})
public class EmployeeController {

  private EmployeeService employeeService;

  EmployeeController(EmployeeService employeeService) {
    this.employeeService = employeeService;
  }

  @GetMapping
  public List<Employee> findAll(@RequestParam(required = false) Integer page,
      @RequestParam(required = false) Integer size) {
    log.debug("EmployeeController:findAll page: " + page + "size: " + size);

    return employeeService.findPage(new Pagination(page, size));
  }

  @PostMapping
  public Employee create(@RequestBody Employee employee) {
    log.debug("EmployeeController:create employee: " + employee);

    return employeeService.create(employee);
  }

}
