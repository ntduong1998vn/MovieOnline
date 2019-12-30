package com.example.springsocial.service;

import com.example.springsocial.dto.MovieDTO;
import com.example.springsocial.model.Genre;
import com.example.springsocial.model.Movie;
import com.example.springsocial.repository.GenreRepository;
import com.example.springsocial.repository.MovieRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MovieService implements IMovieService {

    private static final Logger logger = LoggerFactory.getLogger(MovieService.class);

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private GenreRepository genreRepository;

    @Override
    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    @Override
    public Page<Movie> findAll(int page, int size) {
        return movieRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public Page<Movie> getTopView(int page, int limit) {
        Pageable pageable = PageRequest.of(page, limit, Sort.by("views").descending());
        return movieRepository.findAll(pageable);
    }

    @Override
    public Page<Movie> getPopularMovies(int page, int limit) {
        Pageable pageable = PageRequest.of(page, limit, Sort.by("popularity").descending());
        return movieRepository.findAll(pageable);
    }

    @Override
    public boolean deleteById(int id) {
//        Optional<Movie> result = movieRepository.findById(id);
//        if(!result.isPresent()) return false;
//        Movie movie = result.get();
//        for (Genre genre: movie.getGenres()) {
//
//        }
        return false;
    }

    @Override
    public Optional<Movie> findById(int id) {
        return movieRepository.findById(id);
    }

    @Override
    public Page<Movie> getMoviesByGenreId(int id, int page, int limit) {
        return movieRepository.findMoviesByGenreId(id, PageRequest.of(page, limit));
    }

    @Override
    public Movie save(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public boolean addGenres(int movieId, List<Integer> genreIds) {
        List<Genre> genreList = new ArrayList<>();

        Optional<Movie> result1 = movieRepository.findById(movieId);
        // Kiem tra movie exits
        if (!result1.isPresent()) return false;

        // Lay danh sach genres
        boolean errFlag = false;
        for (int genreId : genreIds) {
            Optional<Genre> temp = genreRepository.findById(genreId);
            if (temp.isPresent())
                genreList.add(temp.get());
            else {
                errFlag = true;
                break;
            }
        }
        if (errFlag) return false;

        Movie movie = result1.get();
        for (Genre genre : genreList) {
            movie.addGenre(genre);
        }
        Movie result2 = movieRepository.save(movie);

        return result2 != null;
    }

    @Override
    public boolean removeGenres(int movieId, List<Integer> deleteList) {
        // List Genre wll be deleted
        List<Genre> genreList = new ArrayList<>();

        Optional<Movie> result1 = movieRepository.findById(movieId);
        // Check movie exits
        if (!result1.isPresent()) return false;

        // Get deleted genre list
        boolean errFlag = false;
        for (int genreId : deleteList) {
            Optional<Genre> temp = genreRepository.findById(genreId);
            if (temp.isPresent())
                genreList.add(temp.get());
            else {
                errFlag = true;
                break;
            }
        }
        if (errFlag) return false;

        Movie movie = result1.get();
        for (Genre genre : genreList) {
            movie.removeGenre(genre);
        }
        Movie result2 = movieRepository.save(movie);

        return result2 != null;
    }

    @Override
    public boolean update(int movieId, MovieDTO movieDTO) {
        Optional<Movie> result = movieRepository.findById(movieId);
        if (result.isPresent()) {
            try {
                Movie updateMovie = result.get();
                updateMovie.setTitle(movieDTO.getTitle());
                updateMovie.setRuntime(movieDTO.getRuntime());
                updateMovie.setRelease_date(movieDTO.getRelease_date());
                updateMovie.setOverview(movieDTO.getOverview());
                updateMovie.setVote_average(movieDTO.getVote_average());
                updateMovie.setProduction_countries(movieDTO.getProduction_countries());
                updateMovie.setPopularity(movieDTO.getPopularity());
                updateMovie.setLanguage(movieDTO.getLanguage());
                updateMovie.setPoster_path(movieDTO.getPoster_path());
                updateMovie.setBackdrop_path(movieDTO.getBackdrop_path());
                updateMovie.setViews(movieDTO.getViews());
                movieRepository.save(updateMovie);
                // Update relationship with Genre entity
                boolean updateGenresRelationship = updateGenresRelationship(movieId, movieDTO.getGenres());

                return updateGenresRelationship;
            } catch (Exception e) {
                logger.error(e.getMessage());
                return false;
            }
        }
        return false;
    }

    @Transactional
    public boolean updateGenresRelationship(int movieId,Set<Genre> genreUpdateList){
        Optional<Movie> result = movieRepository.findById(movieId);
        if(!result.isPresent()) return false;
        Set<Genre> movieGenreList = result.get().getGenres();

        List<Integer> addList = genreUpdateList.stream()
                .filter(genre -> movieGenreList.stream().noneMatch(x -> x.getId() == genre.getId()))
                .map(Genre::getId)
                .collect(Collectors.toList());

        List<Integer> removeList = movieGenreList.stream()
                .filter(genre -> genreUpdateList.stream().noneMatch(x -> x.getId() == genre.getId()))
                .map(Genre::getId)
                .collect(Collectors.toList());

        try {
            addGenres(movieId,addList);
            removeGenres(movieId,removeList);
            return true;
        }catch (DataAccessException e){
            logger.error(e.getMessage());
            return false;
        }
    }

    @Override
    public List<Movie> findByTitle(String keyword) {
        return movieRepository.findByTitleName(keyword);
    }

    @Override
    public List<Movie> findByLetterBegin(String letter) {
        if(letter.contains("0-9"))
            return movieRepository.findByNumberBegin();
        return movieRepository.findByLetterBegin(letter);
    }
}
