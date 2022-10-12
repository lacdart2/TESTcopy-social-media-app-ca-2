import { updatePost } from "../api_settings/posts/index.js";
/* import * as update from "../api_settings/posts/update.js"; */

export function setUpdatePostFormListener() {

    const form = document.querySelector("#editPost");

    const url = new URL(location.href);
    console.log(url);
    const id = url.searchParams.get("id");

    /*   const queryString = document.location.search;
      const params = new URLSearchParams(queryString);
      const id = params.get("id"); */

    if (form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;
            /*  const action = form.action;
             const method = form.method; */



            // send to api :
            // in another file (api/auth/login.js)
            updatePost(post)
        })
    }
}