package com.ahoo.airbnb.utils;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class DateUtils {

    private DateUtils() {

    }

    /**
     * @param from (inclusive)
     * @param to   (exclusive)
     * @return 평일 날짜 수
     */
    public static int getWeekdayCount(LocalDateTime from, LocalDateTime to) {
        int weekdayCount = 0;

        for (LocalDate date = from.toLocalDate(); date.isBefore(to.toLocalDate());
            date = date.plusDays(1)) {
            if (!isWeekend(date)) {
                weekdayCount++;
            }
        }

        return weekdayCount;
    }

    /**
     * @param from (inclusive)
     * @param to   (exclusive)
     * @return 주말 날짜 수
     */
    public static int getWeekendCount(LocalDateTime from, LocalDateTime to) {
        int weekendCount = 0;

        for (LocalDate date = from.toLocalDate(); date.isBefore(to.toLocalDate());
            date = date.plusDays(1)) {
            if (isWeekend(date)) {
                weekendCount++;
            }
        }

        return weekendCount;
    }

    private static boolean isWeekend(LocalDate date) {
        return date.getDayOfWeek() == DayOfWeek.FRIDAY || date.getDayOfWeek() == DayOfWeek.SATURDAY;
    }

    /**
     * @param from
     * @param to
     * @return 두 날짜 사이의 일수
     */
    public static int getBetweenDays(LocalDateTime from, LocalDateTime to) {
        return Period.between(from.toLocalDate(), to.toLocalDate()).getDays();
    }

    /**
     * @param date ISO_LOCAL_DATE_TIME 포맷의 문자열(ex.2011-12-03T10:15:30)
     * @return
     */
    public static LocalDateTime stringToLocalDateTime(String date) {
        return LocalDateTime.parse(date, DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }
}
