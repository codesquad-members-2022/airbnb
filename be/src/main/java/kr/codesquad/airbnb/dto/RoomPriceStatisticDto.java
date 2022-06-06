package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Room;
import lombok.Getter;

import java.util.*;

@Getter
public class RoomPriceStatisticDto {

    private Integer minPricePerNight = Integer.MAX_VALUE;
    private Integer maxPricePerNight = Integer.MIN_VALUE;
    private Integer avgPricePerNight;
    private List<CategorizedPrice> countOfCategorizedPricePerNight;

    public RoomPriceStatisticDto of(List<Room> rooms) {
        Map<Integer, CategorizedPrice> categorizedPriceMap = new HashMap<>();
        int totalPricePerNightRooms = 0;

        for (Room room : rooms) {
            Integer pricePerNight = room.getPricePerNight();

            compareAndUpdateMinPrice(pricePerNight);
            compareAndUpdateMaxPrice(pricePerNight);
            totalPricePerNightRooms += pricePerNight;

            int priceTag = pricePerNight / CategorizedPrice.RANGE_OF_PRICE * CategorizedPrice.RANGE_OF_PRICE;
            updateCategorizedPriceMap(categorizedPriceMap, priceTag);
        }

        setAvgPricePerNight(totalPricePerNightRooms, rooms.size());
        setCountOfCategorizedPricePerNight(categorizedPriceMap);

        return this;
    }

    private void setCountOfCategorizedPricePerNight(Map<Integer, CategorizedPrice> categorizedPriceMap) {
        countOfCategorizedPricePerNight = new ArrayList<>(categorizedPriceMap.values());
        Collections.sort(countOfCategorizedPricePerNight);
    }

    private void setAvgPricePerNight(int totalPricePerNightRooms, int roomCount) {
        avgPricePerNight = totalPricePerNightRooms / roomCount;
    }

    private void updateCategorizedPriceMap(Map<Integer, CategorizedPrice> categorizedPriceMap, int priceTag) {
        if (categorizedPriceMap.containsKey(priceTag)) {
            categorizedPriceMap.get(priceTag).addRoomCount();
            return;
        }

        categorizedPriceMap.put(priceTag, new CategorizedPrice(priceTag));
    }

    private void compareAndUpdateMinPrice(Integer pricePerNight) {
        if (minPricePerNight > pricePerNight) {
            minPricePerNight = pricePerNight;
        }
    }

    private void compareAndUpdateMaxPrice(Integer pricePerNight) {
        if (maxPricePerNight < pricePerNight) {
            maxPricePerNight = pricePerNight;
        }
    }
}
