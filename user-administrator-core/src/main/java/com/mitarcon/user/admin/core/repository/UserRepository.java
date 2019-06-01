package com.mitarcon.user.admin.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mitarcon.user.admin.core.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
