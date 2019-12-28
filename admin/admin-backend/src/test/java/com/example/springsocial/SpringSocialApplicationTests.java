package com.example.springsocial;

import com.example.springsocial.model.Genre;
import com.example.springsocial.model.Movie;
import com.example.springsocial.repository.MovieRepository;
import com.example.springsocial.service.MovieService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RunWith(SpringRunner.class)
public class SpringSocialApplicationTests {


	@Test
	public void contextLoads() {

		assert(true);
	}



}
