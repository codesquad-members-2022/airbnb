package com.ahoo.airbnb.entity;

public enum MemberType {
    GUEST("게스트"), HOST("호스트");

    private String role;

    MemberType(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
