

import * as listeners from "./handlers/index.js";


/* import *  as templates from "./templates/index.js"; */

/* import * as postMethods from "./api_settings/posts/index.js"; */
/* import { renderPostTemplates } from "./templates/index.js"; */



const path = location.pathname;
console.log(path);
if (path === "/profile/login/") {
    listeners.setLoginFormListener()
} else if (path === "/profile/register/") {
    listeners.setRegisterFormListener()
} else if (path === "/post/create/") {
    listeners.setCreatePostFormListener()
} else if (path === "/post/edit/") {
    listeners.setUpdatePostFormListener()
}


/* post.createPost();
post.readPost();
post.updatePost();
post.deletePost();

 post.getPosts().then(console.log);
post.getPost(3586).then(console.log);  */




<<<<<<< Updated upstream

// test template :
/* async function testTemplate() {
    const posts = await postMethods.getPosts();
    const post = posts.pop();
    console.log(post);
    const container = document.querySelector(".posts-container");
    renderPostTemplates(post, container)
}
=======
} else if (path === "/post/edit/index.html") {

    createMenu();
    triggers.setUpdatePostFormListener();
    apiCalls.postDetail();

}
/* else if (path === "/profile/edit/index.html") {
    triggers.setUpdateProfileListener();

} */
>>>>>>> Stashed changes

/* testTemplate() */