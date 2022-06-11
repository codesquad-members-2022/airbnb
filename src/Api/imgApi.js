import axios from "axios";

const baseURL = "/api/img";
const client = axios.create({ baseURL });

const imgApi = {
	getImg: async (name) => {
		try {
			const response = await client.get("/", { params: { name } });
			return response.data;
		} catch (error) {
			return error.response;
		}
	},
};

export default imgApi;
