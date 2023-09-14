package com.project.fn.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.fn.Model.LoginModel;

public interface loginRepo extends JpaRepository<LoginModel, Integer> {

}
