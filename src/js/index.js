
import createMenu from "./components/createMenu.js";

import * as apiCalls from "./api_settings/posts/index.js";

import * as triggers from "./handlers/index.js";




const path = location.pathname;
console.log(path);





if (path === "/profile/home/index.html") {

    createMenu();
    apiCalls.readHome();

}
else if (path === "/profile/register/index.html") {
    triggers.setRegisterFormListener();

} else if (path === "/profile/login/index.html") {
    triggers.setLoginFormListener();

}
else if (path === "/profile/edit/index.html") {
    triggers.setUpdatePostFormListener()
    createMenu();
} else if (path === "/posts/index.html") {

    createMenu();
    apiCalls.read();
} else if (path === "/post/create/index.html") {

    createMenu();
    triggers.setCreatePostFormListener()
    apiCalls.createPost();

} else if (path === "/post/detail/index.html") {

    createMenu();
    apiCalls.postDetail();

} else if (path === "/post/edit/index.html") {

    createMenu();
    triggers.setUpdatePostFormListener();
    apiCalls.postDetail();

}
else if (path === "/profile/edit/index.html") {
    triggers.setUpdateProfileListener();

}






