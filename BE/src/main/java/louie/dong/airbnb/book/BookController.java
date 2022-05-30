package louie.dong.airbnb.book;

import java.util.List;
import lombok.RequiredArgsConstructor;
import louie.dong.airbnb.book.dto.BookDetailResponse;
import louie.dong.airbnb.book.dto.BookResponse;
import louie.dong.airbnb.book.dto.BookSaveRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/books")
@RestController
public class BookController {

	private final MockBockService mockBockService;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public void save(@RequestBody BookSaveRequest bookSaveRequest) {
		mockBockService.save(bookSaveRequest);
	}

	@GetMapping
	public List<BookResponse> getBooks() {
		return mockBockService.findAll();
	}

	@GetMapping("/{id}")
	public BookDetailResponse getBookDetail(@PathVariable Long id) {
		return mockBockService.findById(id);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		mockBockService.delete(id);
	}
}
