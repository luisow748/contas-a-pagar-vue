import axios from "axios";

export const accountApi = axios.create({
    baseURL: "http://localhost:8082/api"
});

export default {
    getRegisters() {
        return accountApi.get("/register")
            .then((res) => {
                return res.data
            });
    }
}
