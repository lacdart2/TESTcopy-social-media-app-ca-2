import { API_SOCIAL_URL } from "../constants.js";
import * as storage from "../../utils/storage.js"
import { relocate } from "../../components/relocate.js"
import { displayMessage } from "../../components/displayMessage.js";
const messageContainer = document.querySelector(".message-container");
const action = "/auth/login";
const method = "POST";

export async function login(profile) {

    const loginURL = API_SOCIAL_URL + action;
    console.log(loginURL);
    const body = JSON.stringify(profile);
    console.log(body)


    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json",

        },
        method,
        body

    })
    const { accessToken, ...user } = await response.json();

    storage.saveToStorage("token", accessToken)

    // save all except token
    storage.saveToStorage("profile", user)



    console.log(accessToken);
    if (accessToken) {
        displayMessage("success", "Successfully Logged in", ".message-container")



        /*  window.setTimeout(relocate, 1000); */

    } else if (!accessToken) {
        displayMessage("warning", "Invalid login details", ".message-container");
    }

}

