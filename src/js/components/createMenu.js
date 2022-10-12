import { getUsername } from "../utils/storage.js";

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if (username) {
        authLink = `<a href="posts.html" class="${pathname === "/posts.html" ? "active" : ""}">Add Post</a>
                    <span>Hi ${username}</span>`;
    }

    container.innerHTML = `<div class="menu">
                                <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                                ${authLink}
                        </div>`;
}
