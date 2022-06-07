package kr.codesquad.airbnb.exception;

public class AccessTokenNotFoundException extends RuntimeException{
    public AccessTokenNotFoundException(){
        super("Access token을 찾을 수 없습니다.");
    }
}
