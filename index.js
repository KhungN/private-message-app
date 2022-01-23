const {hash}=window.location;
const message=atob(hash.replace("#",""));
if(message){
    document.querySelector(".message-show").classList.remove("hide");
    document.querySelector(".message-form").classList.add("hide"); 

    document.querySelector(".message-show h1").innerText=message;
}

document.querySelector("form").addEventListener("submit",event=>{
    event.preventDefault();
    document.querySelector(".message-form").classList.add("hide");
    document.querySelector(".link-form").classList.remove("hide");

    const msginput=document.querySelector(".message-input");
    const encrypted=btoa(msginput.value); 

    const linkInput=document.querySelector(".link-input")
    linkInput.value=`${window.location}#${encrypted}`;
    linkInput.select();
})