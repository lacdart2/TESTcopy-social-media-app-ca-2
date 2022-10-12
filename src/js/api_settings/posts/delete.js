import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/posts";
const method = "delete";

export async function deletePost(id) {

    /*   if (!id) {
          alert("update needs an ID");
      } */
    const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;


    const response = await fetchToken(deletePostURL, {
        method,
        /*  body: JSON.stringify(postData) */
    })

    return await response.json();
}

