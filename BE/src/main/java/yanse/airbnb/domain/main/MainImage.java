package yanse.airbnb.domain.main;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MainImage {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String url;

	private ImageType imageType;

	private String title;

	private String content;

}
