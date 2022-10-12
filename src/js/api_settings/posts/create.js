import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";
import { displayMessage } from "../../components/displayMessage.js";
const message = document.querySelector(".message-container");

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;

    try {

        const response = await fetchToken(createPostURL, {
            method,
            body: JSON.stringify(postData)
        })
        if (post.created) {
            displayMessage("success", "Post created", ".message-container");
            form.reset();
            console.log(post.created)
        }

        if (post.error) {
            displayMessage("error", post.message, ".message-container");
        }
        return await post.json();

    } catch (error) {

        console.log(error);
      /*   displayMessage("error", "An error occured", ".message-container") */;
    }

}