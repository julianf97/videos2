// Mobile - Videos
const contenedorPrincipalVideo = document.getElementById("contenedorprincipalvideo");
const videoPrincipal = document.getElementById("videoprincipal");
const videoChico1 = document.getElementById("videochico1");
const videoChico2 = document.getElementById("videochico2");
const videoChico3 = document.getElementById("videochico3");
const videoChico4 = document.getElementById("videochico4");

videoChico2.addEventListener("click", () => {


    contenedorPrincipalVideo.remove(videoPrincipal);

    let videoPrincipal2 = document.createElement("iframe");

    videoPrincipal2.setAttribute("id", "videoprincipal2");
    videoPrincipal2.setAttribute("width", "560");
    videoPrincipal2.setAttribute("heigth", "315");
    videoPrincipal2.setAttribute("src", "https://www.youtube.com/embed/LkJ5jJuraLQ");
    videoPrincipal2.setAttribute("title", "YouTube video player");
    videoPrincipal2.setAttribute("frameborder", "0");

    
    contenedorPrincipalVideo.append(videoPrincipal2);


})

