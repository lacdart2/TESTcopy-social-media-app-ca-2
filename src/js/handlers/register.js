


/* const name = document.querySelector("input[name=name]");
const password = document.querySelector("input[name=password]");
const email = document.querySelector("input[name=password]"); */



/*
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const banner = form.banner.value;
      const avatar = form.avatar.value;
  
  
  
      const profile = {
          name,
          email,
          password,
          banner,
          avatar
  
  
      } */


import { register } from "../api_settings/auth/register.js";
export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())
        const action = form.action;
        const method = form.method;



        // send to api :
        // in another file (api/auth/register.js)
        register(profile, action, method)
    })
}