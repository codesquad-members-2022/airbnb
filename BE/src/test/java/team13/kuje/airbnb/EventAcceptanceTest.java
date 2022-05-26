package team13.kuje.airbnb;

import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import static io.restassured.RestAssured.given;
import static org.hamcrest.core.IsEqual.equalTo;

/**
 *todo
 * 홈페이지 접속 시 메인 배너 정보를 조회할 수 있게 해주세요
 * GET /events?category_tag=main
 * 홈페이지 접속 시 이벤트 정보들을 조회할 수 있게 해주세요
 * GET /events?category_tag=list
 */

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class EventAcceptanceTest {

	@LocalServerPort
	int port;

	@BeforeEach
	void setUp() {
		RestAssured.port = port;
	}

	@Test
	void 만약_category_tag가_main이면_이벤트_메인_배너_조회_성공() {
		given()
			.accept(MediaType.APPLICATION_JSON_VALUE)

		.when()
			.get("/api/events?category_tag=main")

		.then()
			.statusCode(HttpStatus.OK.value())
			.assertThat()
			.body("data[0].title", equalTo("슬기로운 자연생활"));


}
}
