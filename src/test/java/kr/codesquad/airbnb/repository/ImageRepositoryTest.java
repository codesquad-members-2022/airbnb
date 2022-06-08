package kr.codesquad.airbnb.repository;

import java.util.List;
import kr.codesquad.airbnb.domain.Images;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class ImageRepositoryTest {

    @Autowired
    private LodgingRepository lodgingRepository;

   /* @Test
    @Transactional
    void findAllByLodgingIdTest() {
        List<Images> allByLodgingId = lodgingRepository.findById(1L).get().getSubImages();

        for (Images i: allByLodgingId
        ) {
            System.out.println("i = " + i);
        }
        Assertions.assertThat(allByLodgingId.size()).isEqualTo(3);
    }
*/
}
