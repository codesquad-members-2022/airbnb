package yanse.airbnb.domain.image;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import yanse.airbnb.type.ImageType;

@Entity
@Getter
public class Image {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "image_id")
	private Long id;

	private String url;

	@Enumerated(EnumType.STRING)
	private ImageType imageType;

	private String title;

	private String content;

}
