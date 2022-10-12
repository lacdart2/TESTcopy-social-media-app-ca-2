import { displayMessage } from "../../components/displayMessage.js";
import * as storage from "../../utils/storage.js"
import { API_SOCIAL_URL } from "../constants.js";
const message = document.querySelector(".message-container");


export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())


            // send it to the API
            login(profile)

        })
    }

}

const action = "/auth/login";
const method = "POST";

export async function login(profile) {

    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);
    console.log(loginURL)

    try {
        const response = await fetch(loginURL, {
            headers: {
                "Content-Type": "application/json",

            },
            method,
            body,

        })


        const { accessToken, ...account } = await response.json()
        if (account, accessToken) {


            displayMessage("success", "Successfully logged in", ".message-container");
            console.log(account);
            location.href = "/profile/home.html";
            console.log(location.href);




        }

        if (account.message) {

            displayMessage("warning", "Invalid login details", ".message-container");
        }
        storage.saveToStorage("token", accessToken);
        storage.saveToStorage("profile", account);
        console.log(accessToken)
    } catch (error) {
        console.log(error);
    }


}

