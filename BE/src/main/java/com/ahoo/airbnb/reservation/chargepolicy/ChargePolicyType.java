package com.ahoo.airbnb.reservation.chargepolicy;

public enum ChargePolicyType {
    WEEKDAY("주중요금정책", WeekdayChargePolicy.getInstance()),
    WEEKEND("주말요금정책", WeekendChargePolicy.getInstance());

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
