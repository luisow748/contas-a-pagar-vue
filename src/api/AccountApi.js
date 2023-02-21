import axios from "axios";

export const accountApi = axios.create({
    baseURL: "http://localhost:8082/api"
});
const accountApiName = "account"
export default {
    getAccounts() {
        return accountApi.get("/account")
            .then((res) => {
                return res.data
            });
    },
    saveRegister(account) {
        let installmentValue = Number(account.installmentValue).toFixed(2);
        let totalValue = Number(account.totalValue).toFixed(2);
        return accountApi.post(accountApiName, {
            name: account.name,
            status: null,
            totalValue: totalValue,
            installmentQty: account.installmentQty,
            installmentValue: installmentValue
        })
            .then((res) => {
                return res.data
            });
    }
}
