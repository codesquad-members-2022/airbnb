package kr.codesquad.airbnb.domain;

import lombok.Getter;

import java.util.*;

@Getter
public class RoomPriceStatistic {

    private int minPrice = Integer.MAX_VALUE;
    private int maxPrice = Integer.MIN_VALUE;
    private int avgPrice;
    private List<CategorizedPrice> countOfCategorizedPrice;

    public RoomPriceStatistic(List<Room> possibleBookingRooms) {
        Map<Integer, CategorizedPrice> categorizedPriceMap = new HashMap<>();
        int totalPricePerNightRooms = 0;

        for (Room room : possibleBookingRooms) {
            Integer roomPrice = room.getPricePerNight();

            minPrice = Math.min(minPrice, roomPrice);
            maxPrice = Math.max(maxPrice, roomPrice);
            totalPricePerNightRooms += roomPrice;

            int priceTag = CategorizedPrice.makePriceTag(roomPrice);
            updateCategorizedPriceMap(categorizedPriceMap, priceTag);
        }

        putBlankPriceTag(categorizedPriceMap);
        setAvgPrice(totalPricePerNightRooms, possibleBookingRooms.size());
        countOfCategorizedPrice = convertToSortedList(categorizedPriceMap);
    }

    private void updateCategorizedPriceMap(Map<Integer, CategorizedPrice> categorizedPriceMap, int priceTag) {
        if (categorizedPriceMap.containsKey(priceTag)) {
            categorizedPriceMap.get(priceTag).addRoomCount();
            return;
        }
        categorizedPriceMap.put(priceTag, new CategorizedPrice(priceTag, 1));
    }

    private List convertToSortedList(Map<Integer, CategorizedPrice> categorizedPriceMap) {
        ArrayList<CategorizedPrice> categorizedPrices = new ArrayList<>(categorizedPriceMap.values());
        Collections.sort(categorizedPrices);

        return categorizedPrices;
    }

    /**
     * Map에 입력 된 priceTag의 최솟값, 최댓값 범위 내에서
     * priceTag의 값을 RANGE_OF_PRICE 만큼 증가 시키며
     * Map에 입력되지 않은 priceTag를 체크하여 해당 값들을 count = 0 으로 입력
     */
    private void putBlankPriceTag(Map<Integer, CategorizedPrice> categorizedPriceMap) {
        int startPriceTag = CategorizedPrice.makePriceTag(minPrice);
        int endPriceTag = CategorizedPrice.makePriceTag(maxPrice);

        while (startPriceTag > endPriceTag) {
            if (!categorizedPriceMap.containsKey(startPriceTag)) {
                categorizedPriceMap.put(startPriceTag, new CategorizedPrice(startPriceTag, 0));
            }
            startPriceTag += CategorizedPrice.RANGE_OF_PRICE;
        }
    }

    private void setAvgPrice(int totalPricePerNightRooms, int roomCount) {
        avgPrice = totalPricePerNightRooms / roomCount;
    }
}
