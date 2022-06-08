package org.team4.airbnb.wish;


import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;
import static org.junit.jupiter.api.Assertions.assertAll;

import java.util.NoSuchElementException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;
import org.team4.airbnb.accommodation.AccommodationRepository;
import org.team4.airbnb.customer.CustomerRepository;
import org.team4.airbnb.util.EntityCreator;

@DataJpaTest
@Transactional
@Nested
@DisplayName("위시 Repository에서")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class WishRepositoryTest {

	@Autowired
	private WishRepository wishRepository;
	@Autowired
	private AccommodationRepository accommodationRepository;
	@Autowired
	private CustomerRepository customerRepository;


	@Test
	@DisplayName("위시리스트 등록하기")
	void addWish() {
		//given
		Wish wish = EntityCreator.createWish(customerRepository, accommodationRepository);

		//when
		Wish savedWish = wishRepository.save(wish);

		//then
		assertAll(
			() -> assertThat(savedWish.getAccommodationId()).isEqualTo(wish.getAccommodationId()),
			() -> assertThat(savedWish).isEqualTo(wish)
		);
	}

	@Test
	@DisplayName("위시리스트 삭제하기")
	void deleteWish() {
		//given
		Wish wish = wishRepository.findFirstBy();

		//when
		wishRepository.delete(wish);

		//then
		assertThatExceptionOfType(NoSuchElementException.class)
			.isThrownBy(() -> wishRepository.findById(wish.getId()).get());
	}
}
