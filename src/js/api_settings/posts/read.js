/* import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/posts";


export async function getPosts() {


    const getPostURL = `${API_SOCIAL_URL}${action}`;


    const response = await fetchToken(getPostURL)

    return await response.json();
}


export async function getPost(id) {
    if (!id) {
        throw new Error("you need a post ID yo find it ");
    }


    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;


    const response = await fetchToken(getPostURL)

    return await response.json();
}

 */




import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";



const action = "/posts";
const getPostURL = `${API_SOCIAL_URL}${action}`;


(async function () {
    const postsContainer = document.querySelector(".posts-container");

    try {
        const response = await fetchToken(getPostURL)
        const json = await response.json();
        console.log(json);

        postsContainer.innerHTML = "";

        json.forEach(function (post) {

            postsContainer.innerHTML +=
                `<a class="post" href = "post/detail/detail.html?id=${post.id}">
                        <div class="card">
                            <div class="card-body text-start overflow-hidden d-flex flex-column align-items-left">
                                <div class="card-top">
    
                                    <h5 class="card-title">${post.title}</h5>
    
                                    <div class="card-details">
                                        <p class="fs-6 text-left">
                                            <i class="fa-solid fa-pen"></i>
                                            ${post.body}
                                        </p>
                                        <small>
                                            <i class="fa-solid fa-calendar-days"></i>
                                            ${post.updated}
                                        </small>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                     <a/> `


        });


    } catch (error) {
        console.log(error);

    }
})();