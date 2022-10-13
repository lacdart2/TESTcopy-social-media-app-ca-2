import { API_SOCIAL_URL } from "../constants.js";
import { displayMessage } from "../../components/displayMessage.js";
const messageContainer = document.querySelector(".message-container");
const action = "/auth/register";
const method = "POST";

export async function register(profile) {

    const registerURL = API_SOCIAL_URL + action;
    console.log(registerURL);
    const body = JSON.stringify(profile);
    console.log(body)


    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json",

        },
        method,
        body

    })
    const result = await response.json();
    return result;
    console.log(result);
    if (result.id) {
        displayMessage("success", "Successfully registered", ".message-container")
    } else if (!result.id) {
        displayMessage("warning", "Invalid register details", ".message-container");
    }

}

