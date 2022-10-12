
import { API_SOCIAL_URL } from "./api_settings/constants.js";
import { fetchToken } from "./api_settings/fetchToken.js";

const action = "/posts";
(async function () {
    const homePostsContainer = document.querySelector(".posts-container-preview");
    const allPostsCount = document.querySelector(".posts-count");

    const getPostURL = `${API_SOCIAL_URL}${action}`;
    try {
        const response = await fetchToken(getPostURL)
        const json = await response.json();
        /*   const latest = json.filter(json => json.updated) */
        console.log(json);



        homePostsContainer.innerHTML = "";
        allPostsCount.innerHTML = "";

        json.forEach(function (post, i) {
            if (i === json.length - 1) {

                homePostsContainer.innerHTML +=
                    `<a class="post" href = "edit.html?id=${json.id}" >
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

                allPostsCount.innerHTML = `
                                        <small>
                                           <i class="fa-solid fa-cloud-arrow-up"></i>
                                           number of posts:  ${json.length}
                                        </small>
                                     `
            }
        });

    } catch (error) {
        console.log(error);
    }


})();



