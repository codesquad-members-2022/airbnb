import React from "react";
import CylindricalBox from "./CylindricalBox";
import {useOptionContext} from "../../../contexts/OptionProvider";
import {searchBarTab} from "../../../helper/constants";

const GuestBox = () => {
    const {guestCount} = useOptionContext();
    const getGuestText = () => {
        const guest = guestCount.adult + guestCount.children;
        const infant = guestCount.infant;
        const companionAnimal = guestCount.companionAnimal;
        const guestCountText = [];

        guest && guestCountText.push(`게스트 ${guest}명`);
        infant && guestCountText.push(`유아 ${infant}명`);
        companionAnimal && guestCountText.push(`반려동물 ${companionAnimal}마리`);

        return guestCountText.length ? guestCountText.join(", ") : null;
    };
    const guestText = getGuestText();

    return (
        <CylindricalBox
            title="인원"
            placeHolder="게스트 추가"
            style={guestBoxStyle}
            partId={searchBarTab.GUESTBOX}
            description={guestText}
            hasSearchButton={true}
        />
    );
};

const guestBoxStyle = {
    width: "298px",
    height: "100%",
};

export default GuestBox;
