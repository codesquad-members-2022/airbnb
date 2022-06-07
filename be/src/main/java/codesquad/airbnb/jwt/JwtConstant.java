package codesquad.airbnb.jwt;

public class JwtConstant {

    public static final String SECRET_KEY = System.getenv("SECRET_KEY");
    public static final String ACCESS_TOKEN_TYPE = "Bearer ";
    public static final long ACCESS_TOKEN_DURATION = 60 * 1 * 1000; // access token 유효시간 : 1분
    public static final long REFRESH_TOKEN_DURATION = 60 * 2 * 1000; // refresh token 유효시간 : 2분
    public static final String REFRESH_TOKEN_HEADER_NAME = "refresh_token";
    public static final String LOGOUT_FLAG = "LOGOUT";
}
