package yanse.airbnb.domain.room;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import yanse.airbnb.web.dto.ResponseSearchAddressDto;

public interface RoomRepository extends JpaRepository<Room, Long> {

	@Query("select new yanse.airbnb.web.dto.ResponseSearchAddressDto"
		+ "(concat(r.address.city, ' ' ,r.address.region, ' ' ,r.address.district, r.address.detail)) from Room r "
		+ "where r.address.city like %:address% or r.address.region like %:address% "
		+ "or r.address.district like %:address% or r.address.detail like %:address%")
	List<ResponseSearchAddressDto> findByAddress(@Param("address") String address);
}
