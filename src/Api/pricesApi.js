import axios from "axios";

const baseURL = "/api/prices";
const client = axios.create({ baseURL });

const pricesApi = {
	getPrices: async () => {
		try {
			const response = await client.get("/");
			return response.data;
		} catch (error) {
			return error.response;
		}
	},
};

export default pricesApi;
