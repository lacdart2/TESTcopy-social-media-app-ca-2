

//import createMenu from "../../components/createMenu.js";
import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";
/* import createMenu from "../../components/createMenu.js"; */

//createMenu();

const action = "/posts";
(async function readHome() {
    const homePostsContainer = document.querySelector(".posts-container-preview");
    const allPostsCount = document.querySelector(".posts-count");


    const getPostURL = `${API_SOCIAL_URL}${action}`;
    console.log(getPostURL)
    try {
        const response = await fetchToken(getPostURL)
        console.log(response)
        const json = await response.json();

        console.log(json);



        homePostsContainer.innerHTML = "";
        allPostsCount.innerHTML = "";

        json.forEach(function (post, i) {
            if (i === json.length - 1) {
                /*    if (!post.media) {

                noImage.innerHTML += `<div class="post-image">
                                           <img src="/images/missing-image.jpg" class="img-thumbnail mb-2" alt="${post.title}">
                                         </div>`
               } */

                homePostsContainer.innerHTML +=
                    `<a class="post" href = "/post/detail/index.html?id=${post.id}" >
                        <div class="card">
                            <div class="card-body text-start overflow-hidden d-flex flex-column align-items-left  p-3">
                                <div class="card-top">
    
                                    <h5 class="card-title">${post.title}</h5>
    
                                    <div class="card-details">
                                        <p class="fs-6 text-left">
                                            <i class="fa-solid fa-pen"></i>
                                            ${post.body}
                                        </p>
                                        <div class="post-image">
                                           <img src="${post.media}" class="img-thumbnail mb-2" alt="${post.title}">
                                         </div>
                                        <small>
                                            <i class="fa-solid fa-calendar-days"></i>
                                            ${post.updated}
                                        </small>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary w-50 mt-2">Read More</a>
                            </div>
                        </div>
                     <a/> `

                allPostsCount.innerHTML = `
                                        <small>
                                           <i class="fa-solid fa-cloud-arrow-up"></i>
                                           number recent posts:  ${json.length}
                                        </small>
                                     `
            }

        });

    } catch (error) {
        console.log(error);
    }


})();



