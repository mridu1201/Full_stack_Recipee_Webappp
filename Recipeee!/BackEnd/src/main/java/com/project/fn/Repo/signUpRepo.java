package com.project.fn.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.fn.Model.SignUpModel;

public interface signUpRepo extends JpaRepository<SignUpModel, Integer> {

}
