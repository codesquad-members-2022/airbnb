package com.ahoo.airbnb.reservation.chargepolicy;

public enum ChargePolicyType {
    WEEKDAY("주중요금정책", WeekdayChargePolicy.getInstance()),
    WEEKEND("주말요금정책", WeekendChargePolicy.getInstance()),
    WEEKLY_DISCOUNT("주단위할인정책", WeeklyDiscountChargePolicy.getInstance()),
    SERVICE("서비스요금정책", ServiceChargePolicy.getInstance()),
    CLEANING("청소비요금정책", CleaningChargePolicy.getInstance()),
    ACCOMMODATION_TAX("숙박세요금정책", AccommodationTaxChargePolicy.getInstance());

    private String policyName;
    private ChargePolicy chargePolicy;

    ChargePolicyType(String policyName, ChargePolicy chargePolicy) {
        this.policyName = policyName;
        this.chargePolicy = chargePolicy;
    }

    public String getPolicyName() {
        return policyName;
    }

    public ChargePolicy getChargePolicy() {
        return chargePolicy;
    }
}
