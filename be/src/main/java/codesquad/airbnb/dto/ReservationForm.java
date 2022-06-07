package codesquad.airbnb.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import lombok.Getter;

@Getter
public class ReservationForm {

    private Long accommodationId;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkInDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkOutDate;
    private Integer personnel;
    private Integer accommodationCost;
    private Integer discountAmount;
    private Integer cleaningFee;
    private Integer serviceFee;
    private Integer tax;
    private Integer totalPrice;
}
