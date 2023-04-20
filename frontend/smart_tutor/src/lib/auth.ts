//@ts-nocheck
import axios from "axios";

const BASE_URL = "https://smart-tutor.onrender.com/api/v1";

const login = async (loginForm) => {
	try {
		// const res = await axios.post(`${BASE_URL}/auth/login`, loginForm, {
		// 	headers: { "Content-Type": "application/json" },
		// });
		// console.log(res);
		return {
			success: true,
			response: { token: "38|ZXVMlJiwjgecBFoJpb0xRWitWd5xtxa59UxgR4s0" },
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return {
				success: false,
				response: { error_msg: error.response?.data.error },
			};
		} else {
			return { success: false, response: { error_msg: error.data.error } };
		}
	}
	// console.log(res);
};

const register = async (registerForm) => {
	try {
		// const res = await axios.post(`${BASE_URL}/auth/register`, registerForm, {
		// 	headers: { "Content-Type": "application/json" },
		// });
		// console.log(res);
		return { success: true, response: { registerForm } };
	} catch (error: any) {
		console.log(error);
		if (axios.isAxiosError(error)) {
			return {
				success: false,
				response: { error_msg: error.response?.data.error },
			};
		} else {
			return { success: false, response: { error_msg: error.data.error } };
		}
	}
};

export { login, register };
