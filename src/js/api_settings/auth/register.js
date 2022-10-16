



/* import { register } from "../api_settings/auth/register.js"; */
import { API_SOCIAL_URL } from "../constants.js";
export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");
    /*     const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const banner = form.banner.value;
        const avatar = form.avatar.value; */
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            /*   if (!profile.banner) {
                formData.delete('banner');
            }
             else if (!profile.avatar) {
                   formData.delete('avatar');
               } */

            /*  const action = form.action;
             const method = form.method; */



            // send to api :
            // in another file (api/auth/register.js)
            register(profile)
        })
    }


}




const action = "/auth/register";
const method = "POST";

export async function register(profile) {

    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);
    console.log(registerURL)


    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json",

        },
        method,
        body,

    })
    const result = await response.json();
    console.log(result);
}

