/* export function postTemplateA(postData) {
    return `<div class="post" id=${postData.id}>${postData.title}</div>`
}
export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;
    return post;
}
export function renderPostTemplate(postData, parent) {

    parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplateB))
} */

/* import { API_SOCIAL_URL } from "../api_settings/constants.js";
import { fetchToken } from "../api_settings/fetchToken.js";

const action = "/posts";
(async function () {
    const postsContainer = document.querySelector(".posts-container");

    const getPostURL = `${API_SOCIAL_URL}${action}`;
    try {
        const response = await fetchToken(getPostURL)
        const json = await response.json();
        console.log(json);

        postsContainer.innerHTML = "";

        json.forEach(function (post) {

            postsContainer.innerHTML +=
                `<a class="post" href = "edit.html?id=${post.id}" >
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
})(); */