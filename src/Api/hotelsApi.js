import axios from "axios";

const baseURL = "/api/hotels";
const client = axios.create({ baseURL });

const hotelsApi = {
	getHotels: async () => {
		try {
			const response = await client.get("/");
			return response.data;
		} catch (error) {
			return error.response;
		}
	},
};

export default hotelsApi;
