import axios from "axios";

export const accountApi = axios.create({
    baseURL: "http://localhost:8082/api"
});

export default {
    getAccounts() {
        return accountApi.get("/account")
            .then((res) => {
                return res.data
            });
    }
}
