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

            int priceTag = pricePerNight / CategorizedPrice.RANGE_OF_PRICE * CategorizedPrice.RANGE_OF_PRICE; // RANGE_OF_PRICE 설정 기준으로 숙박 가격의 priceTag 계산.
            updateCategorizedPriceMap(categorizedPriceMap, priceTag);
        }

        putBlankPriceTag(categorizedPriceMap);
        setAvgPricePerNight(totalPricePerNightRooms, rooms.size());
        setCountOfCategorizedPricePerNight(convertToSortedList(categorizedPriceMap));

        return this;
    }

    private List convertToSortedList(Map<Integer, CategorizedPrice> categorizedPriceMap) {
        ArrayList<CategorizedPrice> categorizedPrices = new ArrayList<>(categorizedPriceMap.values());
        Collections.sort(categorizedPrices);

        return categorizedPrices;
    }

    /**
     * Map에 입력 된 priceTag의 최솟값, 최댓값 범위 내에서 비어있는 범위의 값들을 count = 0 으로 입력
     */
    private void putBlankPriceTag(Map<Integer, CategorizedPrice> categorizedPriceMap) {
        int startPriceTag = maxPricePerNight / CategorizedPrice.RANGE_OF_PRICE * CategorizedPrice.RANGE_OF_PRICE;
        int endPriceTag = minPricePerNight / CategorizedPrice.RANGE_OF_PRICE * CategorizedPrice.RANGE_OF_PRICE;

        while (startPriceTag > endPriceTag) {
            if (!categorizedPriceMap.containsKey(startPriceTag)) {
                categorizedPriceMap.put(startPriceTag, new CategorizedPrice(startPriceTag, 0));
            }
            startPriceTag -= CategorizedPrice.RANGE_OF_PRICE;
        }
    }

    private void setCountOfCategorizedPricePerNight(List categorizedPricePerNight) {
        countOfCategorizedPricePerNight = categorizedPricePerNight;
    }

    private void setAvgPricePerNight(int totalPricePerNightRooms, int roomCount) {
        avgPricePerNight = totalPricePerNightRooms / roomCount;
    }

    private void updateCategorizedPriceMap(Map<Integer, CategorizedPrice> categorizedPriceMap, int priceTag) {
        if (categorizedPriceMap.containsKey(priceTag)) {
            categorizedPriceMap.get(priceTag).addRoomCount();
            return;
        }

        categorizedPriceMap.put(priceTag, new CategorizedPrice(priceTag, 1));
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
