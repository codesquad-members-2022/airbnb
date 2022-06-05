package codesquad.airbnb.domain;

import com.sun.istack.NotNull;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "schedule")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accommodation_id")
    @NotNull
    private Accommodation accommodation;
    private LocalDate stayDate;
    private Integer vacantRoomQuantity;

    public void removeVacantRoomQuantity() {
        int restVacantRoomQuantity = this.vacantRoomQuantity - 1;
        if (vacantRoomQuantity < 0) {
            throw new IllegalStateException("해당 일정으로는 에약이 불가능합니다.");
        }
        this.vacantRoomQuantity = restVacantRoomQuantity;
    }
}
