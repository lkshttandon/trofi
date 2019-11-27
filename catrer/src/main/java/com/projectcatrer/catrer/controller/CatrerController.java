package com.projectcatrer.catrer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectcatrer.catrer.repo.CatrerRepo;
import com.projectcatrer.modal.Catrer;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CatrerController {
	
	@Autowired
	CatrerRepo crepo;
	
	@PostMapping("/catrer")
	public void createCatrer(@RequestBody Catrer c) {
		crepo.insert(c);
	}
	
//	@GetMapping("/catrer/{id}")
//	public 	Catrer findCatrer(@PathVariable int id) {
//		return crepo.findOne(id);
//	}
	
	@GetMapping("/catrer")
	public List<Catrer> findAllCatrers(){
		return  crepo.findAll();
	}
	
	@DeleteMapping("/catrer/{id}")
	public void deleteCatrer(@PathVariable String id) {
		crepo.deleteById(id);
	}
	
	@PutMapping("/catrer")
	public void updateCatrer(@RequestBody Catrer c) {
		crepo.save(c);
	}
	
}
