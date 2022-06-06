package com.ahoo.airbnb.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.persistence.CascadeType;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "room")
public class Room extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private Member host;

    @Embedded
    private Coordinate coordinate;

    @Embedded
    private Address address;

    private String title;
    private String description;
    private String roomType;
    private Integer maxCapacity;
    private Integer bedroomCount;
    private Integer bedCount;
    private Integer bathroomCount;
    private Integer charge;
    private Integer cleaningCharge;
    private Integer reviewCount;
    private Double averageRate;
    private Boolean isDeleted;

    @OneToMany(mappedBy = "room", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<RoomImage> images = new ArrayList<>();

    @OneToMany(mappedBy = "room", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<RoomChargePolicy> roomChargePolicies = new ArrayList<>();

    public Optional<String> getMainImageUrl() {
        return images.stream()
            .filter(RoomImage::getIsMainImage)
            .map(RoomImage::getUrl)
            .findAny();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Room room = (Room) o;
        return Objects.equals(id, room.id) && Objects.equals(host, room.host)
            && Objects.equals(coordinate, room.coordinate) && Objects.equals(address, room.address)
            && Objects.equals(title, room.title) && Objects.equals(description, room.description)
            && Objects.equals(roomType, room.roomType) && Objects.equals(maxCapacity, room.maxCapacity)
            && Objects.equals(bedroomCount, room.bedroomCount) && Objects.equals(bedCount,
            room.bedCount) && Objects.equals(bathroomCount, room.bathroomCount) && Objects.equals(
            charge, room.charge) && Objects.equals(cleaningCharge, room.cleaningCharge)
            && Objects.equals(reviewCount, room.reviewCount) && Objects.equals(averageRate,
            room.averageRate) && Objects.equals(isDeleted, room.isDeleted) && Objects.equals(images,
            room.images) && Objects.equals(roomChargePolicies, room.roomChargePolicies);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, host, coordinate, address, title, description, roomType, maxCapacity, bedroomCount,
            bedCount, bathroomCount, charge, cleaningCharge, reviewCount, averageRate, isDeleted, images,
            roomChargePolicies);
    }
}


