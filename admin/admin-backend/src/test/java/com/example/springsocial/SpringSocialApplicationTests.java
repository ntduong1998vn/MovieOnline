package com.example.springsocial;

import com.example.springsocial.model.Genre;
import org.junit.Test;
import org.junit.runner.RunWith;
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
		Genre genre1 = new Genre();
		genre1.setId(1);
		genre1.setName("Phieu luu");
		Genre genre2 = new Genre();
		genre2.setId(2);
		genre2.setName("Mao hiem");
		Genre genre3 = new Genre();
		genre3.setId(3);
		genre3.setName("Vien tuong");
		Genre genre4 = new Genre();
		genre4.setId(4);
		genre4.setName("Co trang");
		Genre genre5 = new Genre();
		genre5.setId(5);
		genre5.setName("Comedy");
		Genre genre6 = new Genre();
		genre6.setId(6);
		genre6.setName("Drama");
		Genre genre7 = new Genre();
		genre7.setId(3);
		genre7.setName("Vien tuong");


		List<Genre> list1 = new ArrayList<>();
		list1.add(genre1);list1.add(genre2);
		list1.add(genre3);list1.add(genre4);
		List<Genre> list2 = new ArrayList<>();
		list2.add(genre5);
		list2.add(genre6);
		list2.add(genre7);

		List<Genre> result1 = list2.stream()
				.filter(genre -> list1.stream().noneMatch(x -> x.getId() == genre.getId()))
				.collect(Collectors.toList());
		List<Genre> result2 = list1.stream()
				.filter(genre -> list2.stream().noneMatch(x -> x.getId() == genre.getId()))
				.collect(Collectors.toList());


//		Set<Integer> genreIds = new HashSet<>();;
//		genreIds.add(1);
//		genreIds.add(2);
//		genreIds.add(3);
//		genreIds.add(5);
//		Set<Integer> genreIdList = new HashSet<>();;
//		genreIdList.add(1);
//		genreIdList.add(3);
//		genreIdList.add(4);
//		genreIdList.add(6);
//
//		List<Integer> addList = genreIds.stream()
//				.filter(genreId -> !genreIdList.contains(genreId))
//				.collect(Collectors.toList());
//		List<Integer> removeList = genreIdList.stream()
//				.filter(genreId -> !genreIds.contains(genreId))
//				.collect(Collectors.toList());
//
//		System.out.println(addList.toString());
//		System.out.println(removeList.toString());
		assert(true);
	}



}
