package com.project.fn.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.fn.Model.ForgotpassModel;

public interface forgotRepo extends JpaRepository<ForgotpassModel, Integer> {

}
