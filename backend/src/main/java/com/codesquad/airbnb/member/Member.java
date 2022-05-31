package com.codesquad.airbnb.member;

import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.wish.Wish;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    public enum MemberRole {ADMIN, USER}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Integer id;

    private String name;
    private String imagePath;
    private Boolean isSuperHost;

    @Enumerated(value = EnumType.STRING)
    private MemberRole role;

    @OneToMany(mappedBy = "host")
    private List<Room> hostRooms;

    @OneToMany(mappedBy = "member")
    private List<Wish> wishRefs;

    public Member(String name, String imagePath, Boolean isSuperHost, MemberRole role) {
        this.name = name;
        this.imagePath = imagePath;
        this.isSuperHost = isSuperHost;
        this.role = role;
    }
}
