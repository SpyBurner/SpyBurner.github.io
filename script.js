function onloadbody(){
    if (sessionStorage.getItem("loggedin") == null) 
        window.location.assign("./index.html");
}