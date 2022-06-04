package kr.codesquad.airbnb.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public enum ErrorCode {

	INVALID_REQUEST_PARAMETER(HttpStatus.BAD_REQUEST, "요청에 필요한 필수 파라미터 값이 존재하지 않습니다."),
//	FORBIDDEN_CHECK_IN_DATE_PAST(HttpStatus.BAD_REQUEST, "체크인 날짜는 현재 시간보다 이전 일 수 없습니다."),	checkIn 날짜 과거 설정 검증 개발 편의를 위해 주석처리
	FORBIDDEN_CHECK_OUT_DATE_IS_BEFORE_CHECK_IN(HttpStatus.BAD_REQUEST, "체크아웃 날짜는 체크인 날짜보다 이전 일 수 없습니다."),
	FORBIDDEN_USER(HttpStatus.FORBIDDEN, "요청 권한이 없는 사용자 입니다."),

	;

	private final HttpStatus httpStatus;
	private final String detail;
}
