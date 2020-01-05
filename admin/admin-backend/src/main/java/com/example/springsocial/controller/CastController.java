package com.example.springsocial.controller;

import com.example.springsocial.dto.ActorDTO;
import com.example.springsocial.dto.ApiResponse;
import com.example.springsocial.dto.CastDTO;
import com.example.springsocial.model.Cast;
import com.example.springsocial.model.MovieCast;
import com.example.springsocial.dto.CastRequest;
import com.example.springsocial.repository.MovieCastRepository;
import com.example.springsocial.service.CastService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/cast")
public class CastController {

    private static final Logger logger = LoggerFactory.getLogger(CastController.class);

    @Autowired
    private CastService service;
    @Autowired
    private MovieCastRepository repository;

    @GetMapping("/")
    public List<Cast> getAll() {
        return service.getAll();
    }

    @GetMapping("/all-except-image")
    public List<CastDTO> getAllExceptImg(){
        return service.loadAllCastExceptImg();
    }

    @GetMapping("/movie")
    public List<ActorDTO> getCastersByMovieId(@RequestParam(required = true, name = "id") int movieId) {
        return service.getCharactersByMovieId(movieId);
    }

    @PostMapping("/")
    public ResponseEntity<String> createCast(@Valid @RequestBody CastRequest castRequest) {
        Cast newCast = new Cast();
        newCast.setName(castRequest.getName());
        newCast.setProfile_path(castRequest.getProfile_path());
        boolean rs = service.create(newCast);
        if (rs)
            return ResponseEntity.status(HttpStatus.CREATED).body("Save successfully !");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Luu khong thanh cong");
    }

    @PutMapping(value = "/{castId}",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity updateCast(@PathVariable int castId,
                                             @RequestParam(name = "file",required = false) MultipartFile file,
                                             @RequestParam(name = "name") String name) {
        if (service.update(castId, name,file))
            return ResponseEntity.ok(new ApiResponse(true,"Sửa thông tin thành công"));

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(false,"Sửa thất bại!"));
    }

    @DeleteMapping("/{castId}")
    public ResponseEntity<String> deleteByCastId(@PathVariable int castId) {
        boolean result = service.delete(castId);
        if (result)
            return ResponseEntity.ok("Delete cast successfully!");

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed!");
    }

    @PutMapping(value = "/addNew",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity addNewCaster(@RequestParam(name = "file") MultipartFile file,@RequestParam(name = "name")String name){
        service.createOne(name,file);
        return ResponseEntity.ok("Thanh Cong!");
    }

}
