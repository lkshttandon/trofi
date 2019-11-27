package com.dxc.cook.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dxc.cook.model.Cook;

public interface CookRepository extends MongoRepository<Cook,String>{

}