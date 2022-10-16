
import createMenu from "./components/createMenu.js";

import * as apiCalls from "./api_settings/posts/index.js";

import * as triggers from "./handlers/index.js";




const path = location.pathname;
console.log(path);
console.log("hi from index");
/* 
apiCalls.read;
apiCalls.readHome; */


/* apiCalls.createPost();
apiCalls.updatePost(); */
/* apiCalls.delete(); */
/* apiCalls.createPost({
    title: "hello kad",
    body: "salut kad"
});
apiCalls.updatePost({
    id: 6774,
    title: "hello kad2 AJOUR",
    body: "salut kad222"
});
 */

/* setRegisterFormListener();
setLoginFormListener();
setCreatePostFormListener(); */


/* createMenu(); */
if (path === "/profile/home/index.html") {

    createMenu();
    apiCalls.readHome();

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

    apiCalls.postDetails();

} else if (path === "/post/edit/index.html") {

    createMenu();
    triggers.setUpdatePostFormListener();
    apiCalls.updatePost();

} else if (path === "/profile/register/index.html") {
    triggers.setRegisterFormListener();
} else if (path === "/profile/login/index.html") {
    triggers.setLoginFormListener();
}

/////

/* if (path === "/profile/login/") {
    triggers.setLoginFormListener();
}
else if (path === "/profile/register/") {
    triggers.setRegisterFormListener();
}

else if (path === "/post/create/") {
    triggers.setCreatePostFormListener()
} */
/* else if (path === "/post/edit/") {
    listeners.setUpdatePostFormListener()
} */