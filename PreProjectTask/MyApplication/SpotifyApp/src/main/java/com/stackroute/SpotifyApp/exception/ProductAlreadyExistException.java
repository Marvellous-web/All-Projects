package com.stackroute.SpotifyApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason = "Product Already Exist")
public class ProductAlreadyExistException extends Exception{
}
