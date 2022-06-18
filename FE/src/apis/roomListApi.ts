import { client, PATH } from './client';

interface filteredProps {
  filteredDatas: {
    checkInDate: string;
    checkOutDate: string;
    minRoomCharge?: number;
    maxRoomCharge?: number;
    numOfGuests?: number;
    numOfAdults?: number;
    numOfChildren?: number;
    numOfInfants?: number;
    westLatitude?: number;
    northLongitude?: number;
    eastLatitude?: number;
    southLongitude?: number;
    page: number;
  };
}
const roomListApis = {
  getFilteredRooms: async ({
    filteredDatas: {
      checkInDate,
      checkOutDate,
      minRoomCharge,
      maxRoomCharge,
      numOfGuests,
      numOfAdults,
      numOfChildren,
      numOfInfants,
      westLatitude,
      northLongitude,
      eastLatitude,
      southLongitude,
      page,
    },
  }: filteredProps) => {
    const options = {
      params: {
        checkInDate,
        checkOutDate,
        minRoomCharge,
        maxRoomCharge,
        numOfGuests,
        numOfAdults,
        numOfChildren,
        numOfInfants,
        westLatitude,
        northLongitude,
        eastLatitude,
        southLongitude,
        page,
      },
    };
    const response = await client.get(PATH, options);
    return response.data;
  },
};

export default roomListApis;
