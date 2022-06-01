package com.ahoo.airbnb.reservation.chargepolicy;

public enum ChargePolicyType {
    ACCOMMODATION("숙박요금정책", AccommodationChargePolicy.getInstance(), AccommodationChargePolicy.displayName()),
    WEEKLY_DISCOUNT("주단위할인정책", WeeklyDiscountChargePolicy.getInstance(), WeeklyDiscountChargePolicy.displayName()),
    SERVICE("서비스요금정책", ServiceChargePolicy.getInstance(), ServiceChargePolicy.displayName()),
    CLEANING("청소비요금정책", CleaningChargePolicy.getInstance(), CleaningChargePolicy.displayName()),
    ACCOMMODATION_TAX("숙박세요금정책", AccommodationTaxChargePolicy.getInstance(), AccommodationTaxChargePolicy.displayName());

    private String policyName;
    private ChargePolicy chargePolicy;
    private String displayName;

    ChargePolicyType(String policyName, ChargePolicy chargePolicy, String displayName) {
        this.policyName = policyName;
        this.chargePolicy = chargePolicy;
        this.displayName = displayName;
    }

    public String getPolicyName() {
        return policyName;
    }

    public ChargePolicy getChargePolicy() {
        return chargePolicy;
    }

    public String getDisplayName() {
        return displayName;
    }
}
