import { API_SOCIAL_URL } from "../constants.js";
import { displayMessage } from "../../components/displayMessage.js";


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    /*  document.location.href = "/"; */
}


const action = "/posts";
const postUrl = `${API_SOCIAL_URL}${action}${id}`;

console.log(postUrl);

(async function () {
    try {
        const response = await fetch(postUrl);
        const json = await response.json();

        document.title = json.name;

        const container = document.querySelector(".detail-container");

        container.innerHTML = `<a class="post" href = "/edit/index.html?id=${post.id}" >
                        <div class="card">
                            <div class="card-body text-start overflow-hidden d-flex flex-column align-items-left">
                                <div class="card-top">
    
                                    <h5 class="card-title">${json.title}</h5>
    
                                    <div class="card-details">
                                        <p class="fs-6 text-left">
                                            <i class="fa-solid fa-pen"></i>
                                            ${json.body}
                                        </p>
                                        <small>
                                            <i class="fa-solid fa-calendar-days"></i>
                                            ${json.updated}
                                        </small>
                                          <small>
                                            <i class="fa-solid fa-calendar-days"></i>
                                            ${json.id}
                                        </small>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                     <a/> `;

        console.log(details);
    } catch (error) {
        displayMessage("error", error, ".detail-container");
    }
})();
