import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";


const action = "/posts";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    /*  document.location.href = "/"; */
}

const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

console.log(getPostURL);

export async function postDetail() {
    try {
        const response = await fetchToken(getPostURL);

        const details = await response.json();

        document.title = details.title;

        const postContainer = document.querySelector(".post-container");

        postContainer.innerHTML = `<a class="post" href = "/">
                                        <div class="card">
                                            <div class="card-body text-start overflow-hidden d-flex flex-column align-items-left">
                                                <div class="card-top">
                    
                                                    <h5 class="card-title">${details.title}</h5>
                    
                                                    <div class="card-details">
                                                        <p class="fs-6 text-left">
                                                            <i class="fa-solid fa-pen"></i>
                                                            ${details.body}
                                                        </p>
                                                        <div class="post-image">
                                                          <img src="${details.media}" class="img-thumbnail rounded mb-2" alt="${details.title}">
                                                        </div>
                                                        <small class="mb-3">
                                                            <i class="fa-solid fa-calendar-days"></i>
                                                            ${details.updated}
                                                        </small>
                                                    </div>
                                                </div>
                                                <a href="/post/edit/index.html" class="btn btn-primary btn-danger">Edit Post</a>
                                            </div>
                                        </div>
                                 <a/> `

    } catch (error) {

    }
};
postDetail()