package com.projectcatrer.catrer.repo;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.projectcatrer.modal.Catrer;

public interface CatrerRepo extends MongoRepository<Catrer,String> {
//	Catrer findOne(int id);

//	void delete(int id);
//
//	void update(int id, Catrer c);
}
