// Variables y Constantes
const botonLogin = document.getElementById("btnlogin");
const botonSign = document.getElementById("btnsign");
const contenedorLoginSign = document.getElementById("contenedorloginsign");
const barraRegistro = document.getElementById("barraregistro");
const pantallaNegra = document.getElementById("contenedorlogin");
const pantallaNegraSign = document.getElementById("contenedorsign");
const contenedorModal = document.getElementById("contenedormodal");
const contenedorModalSign = document.getElementById("contenedormodalsign");
const modalOpenSign = document.querySelector(".modal-open-sign");
const modalOpenLogin = document.querySelector(".modal-open-login");
const modalOpenError = document.querySelector(".modal-open-error");
const modalLogin = document.getElementById("modallogin");
const modalSign = document.getElementById("modalsign");
const botonCruz = document.getElementById("botonSalirFormulario");
const botonCruzSign = document.getElementById("salirSign");
const cuadradoRecuerdame = document.getElementById("checkcuadrado");
const labelRecuerdame = document.getElementById("recuerdamecuadrado");
const rellenoCheck = document.getElementById("rellenoCuadrado");
const containerMenu = document.getElementById("containermenu");
const formulario = document.getElementById("formulario");
const nombreSign = document.getElementById("firstname");
const apellidoSign = document.getElementById("lastname");
const mailSign = document.getElementById("mailsign");
const labelMailSign = document.getElementById("labelmailsign");
const labelUserName = document.getElementById("labelusername")
const userNameSign = document.getElementById("username");
const contraseniaSign = document.getElementById("password");
const errorNombre = document.getElementById("errorfirstname");
const errorApellido = document.getElementById("errorlastname")
const errorCorreo = document.getElementById("errorcorreo");
const errorUser = document.getElementById("erroruser");
const cruzErrorMail = document.getElementById("cruzerrormail");
const cruzErrorNombre = document.getElementById("cruzerrorfirstname");
const cruzErrorApellido = document.getElementById("cruzerrorlastname");
const cruzErrorUser = document.getElementById("cruzerroruser");
const cruzErrorPassword = document.getElementById("cruzerrorpassword");
const formularioLogin = document.getElementById("formulariologin");
const cruzErrorEmailLogin = document.getElementById("cruzerrormaillogin");
const cruzErrorPasswordLogin = document.getElementById("cruzerrorpasswordlogin");
const errorEmailUserLogin = document.getElementById("erroruserlogin");
const errorPasswordLogin = document.getElementById("errorpaswordlogin");
const btnJoinFree = document.getElementById("btnfree");
const mailUserLogin = document.getElementById("mailLogin");
const passwordLogin = document.getElementById("passwordlogin");
const sendLogin = document.getElementById("sendlogin");
const notMember = document.getElementById("notmember");
const alReadyMember = document.getElementById("alreadymember");
const contenedorMenu = document.getElementById("contenedormenu");
const botonMenu = document.getElementById("btnmenu");
const cruzMenu = document.getElementById("cruzmenu");
const resto = document.getElementById("resto");
const body = document.querySelector("body");



// Funcion Global
function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}

// MENU 

// Abrir Menú

botonMenu.addEventListener("click", () => {
    contenedorMenu.style.visibility = "visible";
    contenedorMenu.style.opacity = "1";
})

// Cerrar Menú
cruzMenu.addEventListener("click", () => {
    contenedorMenu.style.visibility = "hidden";
    contenedorMenu.style.opacity = "0";
})

resto.addEventListener("click", () => {
    contenedorMenu.style.visibility = "hidden";
    contenedorMenu.style.opacity = "0";
})



// LOGIN - SIGN UP

// Eventos para abrir el modal

botonLogin.addEventListener("click", ()=>{
    pantallaNegra.classList.toggle('modal-open-login');
    body.style.overflow = "hidden";
});


const clickRecuerdame = () => {
    
    const estadoCheck = {mostrar: true}
    
    cuadradoRecuerdame.addEventListener( "click", () =>{
        if(estadoCheck.mostrar){
            rellenoCheck.style.opacity = 0;
            estadoCheck.mostrar = false;
        } else{
            rellenoCheck.style.opacity = 1;
            estadoCheck.mostrar = true;
        }
    })

    labelRecuerdame.addEventListener("click", () =>{
        if(estadoCheck.mostrar){
            rellenoCheck.style.opacity = 0;
            estadoCheck.mostrar = false;
        } else{
            rellenoCheck.style.opacity = 1;
            estadoCheck.mostrar = true;
        }
    })
    
}

botonSign.addEventListener("click", ()=>{
    pantallaNegraSign.classList.toggle('modal-open-sign');
    body.style.overflow = "hidden";
}); 

botonCruz.addEventListener("click", ()=>{
    pantallaNegra.classList.remove('modal-open-login');
    body.style.overflow = "auto";

    errorEmailUserLogin.style.visibility = "hidden";
    cruzErrorEmailLogin.style.visibility = "hidden";
    errorPasswordLogin.style.visibility = "hidden";
    cruzErrorPasswordLogin.style.visibility = "hidden";
});

botonCruzSign.addEventListener("click", ()=>{
    pantallaNegraSign.classList.remove('modal-open-sign');
    body.style.overflow = "auto";

    formulario.reset()

    errorCorreo.style.visibility = "hidden";
    cruzErrorMail.style.visibility = "hidden";
    errorApellido.style.visibility ="hidden";
    cruzErrorNombre.style.visibility = "hidden";
    cruzErrorPassword.style.visibility = "hidden";
    cruzErrorApellido.style.visibility ="hidden";
    errorNombre.style.visibility = "hidden";
    errorUser.style.visibility = "hidden";
    cruzErrorUser.style.visibility = "hidden";
});

const salirModal = () => {
    document.addEventListener('click', (event) => {
        const boolIsOutside = document.getElementById("contenedorlogin").isSameNode(event.target);
        const boolIsOutside2 =  document.getElementById("contenedorsign").isSameNode(event.target);

        if (boolIsOutside) {
            pantallaNegra.classList.remove('modal-open-login');
            body.style.overflow = "auto";

            errorEmailUserLogin.style.visibility = "hidden";
            cruzErrorEmailLogin.style.visibility = "hidden";
            errorPasswordLogin.style.visibility = "hidden";
            cruzErrorPasswordLogin.style.visibility = "hidden";
        }
        if (boolIsOutside2) {
            pantallaNegraSign.classList.remove('modal-open-sign');
            body.style.overflow = "auto";

            formulario.reset()

            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            errorApellido.style.visibility ="hidden";
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            cruzErrorApellido.style.visibility ="hidden";
            errorNombre.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
        } 
    })
}

salirModal();
clickRecuerdame();


//Sign Up
class Usuario{
   
    constructor(firstName,lastName,email,username,password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    }
}

const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || []

btnJoinFree.addEventListener("click", () => {
    let primerNombre = nombreSign.value;
    let apellido = apellidoSign.value;
    let correoElectronico = mailSign.value;
    let nombreDeUsuario = userNameSign.value;
    let contrasenia = contraseniaSign.value;
    const nuevoUsuario = new Usuario(primerNombre,apellido,correoElectronico,nombreDeUsuario,contrasenia);

    sessionStorage.setItem("inicioSesion", nombreDeUsuario);

    const existeCorreo = listaUsuarios.some(u => u.email === correoElectronico);
    const existeUsuario = listaUsuarios.some(i => i.username === nombreDeUsuario);

    if((existeCorreo || existeUsuario || (!allLetter(primerNombre)) || (!allLetter(apellido)))){
        pantallaNegraSign.classList.toggle('.modal-open-error');  
        if((!allLetter(primerNombre && apellido) && (existeCorreo && existeUsuario))){ 
    
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorApellido.style.visibility ="visible";
            cruzErrorNombre.style.visibility = "visible";
            cruzErrorApellido.style.visibility ="visible";
            errorNombre.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
            cruzErrorPassword.style.visibility = "hidden";
    
        }
        else if((!allLetter(primerNombre && apellido) && existeUsuario)){ 
    
            errorApellido.style.visibility ="visible";
            cruzErrorNombre.style.visibility = "visible";
            cruzErrorApellido.style.visibility ="visible";
            errorNombre.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
    
            cruzErrorPassword.style.visibility = "hidden";
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
    
        }
        else if((!allLetter(primerNombre && apellido) && existeCorreo)){ 
        
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorApellido.style.visibility ="visible";
            cruzErrorNombre.style.visibility = "visible";
            cruzErrorApellido.style.visibility ="visible";
            errorNombre.style.visibility = "visible";
    
            cruzErrorPassword.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
    
        }
        else if((!allLetter(primerNombre) && existeUsuario)){ 
    
            pantallaNegraSign.classList.toggle('.modal-open-error');  
    
            errorNombre.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
            cruzErrorNombre.style.visibility = "visible";
    
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            errorApellido.style.visibility ="hidden";
            cruzErrorPassword.style.visibility = "hidden";
            cruzErrorApellido.style.visibility ="hidden";
    
        }
        else if((!allLetter(apellido) && existeUsuario)){ 
        
            pantallaNegraSign.classList.toggle('.modal-open-error');
    
            errorApellido.style.visibility ="visible";
            cruzErrorApellido.style.visibility ="visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
    
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            errorNombre.style.visibility = "hidden";
    
        }
        else if((!allLetter(primerNombre) && existeCorreo)){ 
        
            pantallaNegraSign.classList.toggle('.modal-open-error');  
    
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            cruzErrorNombre.style.visibility = "visible";
            errorNombre.style.visibility = "visible";
            
            errorApellido.style.visibility ="hidden";
            cruzErrorPassword.style.visibility = "hidden";
            cruzErrorApellido.style.visibility ="hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
            
        }
        else if((!allLetter(apellido) && existeCorreo)){ 
        
            pantallaNegraSign.classList.toggle('.modal-open-error'); 
            
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorApellido.style.visibility ="visible";
            cruzErrorApellido.style.visibility ="visible";
    
            cruzErrorNombre.style.visibility = "hidden !important";
            cruzErrorPassword.style.visibility = "hidden";
            cruzErrorApellido.style.visibility ="hidden";
            errorNombre.style.visibility = "hidden !important";
            errorUser.style.visibility = "hidden ";
            cruzErrorUser.style.visibility = "hidden";
    
        } else if(existeCorreo && existeUsuario){
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
            
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorApellido.style.visibility = "hidden";
            errorNombre.style.visibility = "hidden";
            errorApellido.style.visibility = "hidden";
        } else if ((!allLetter(primerNombre) && (!allLetter(apellido)))) {
            errorNombre.style.visibility = "visible";
            cruzErrorNombre.style.visibility = "visible";
            errorApellido.style.visibility = "visible";
            cruzErrorApellido.style.visibility = "visible";
            
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
        } else if(!allLetter(primerNombre)){
            errorNombre.style.visibility = "visible";
            cruzErrorNombre.style.visibility = "visible";
            
            errorApellido.style.visibility = "hidden";
            cruzErrorApellido.style.visibility = "hidden";
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
        } else if(!allLetter(apellido)){
            errorApellido.style.visibility = "visible";
            cruzErrorApellido.style.visibility = "visible";
            
            errorNombre.style.visibility = "hidden";
            cruzErrorNombre.style.visibility = "hidden";
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorPassword.style.visibility = "hidden";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
        } else if(existeCorreo){
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
    
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
            errorNombre.style.visibility = "hidden";
            errorApellido.style.visibility = "hidden";
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorApellido.style.visibility = "hidden";
        } else if(existeUsuario){
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
    
            errorCorreo.style.visibility = "hidden";
            errorNombre.style.visibility = "hidden";
            errorApellido.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
            cruzErrorNombre.style.visibility = "hidden";
            cruzErrorApellido.style.visibility = "hidden";
        } else if (primerNombre === ""){
            cruzErrorNombre.style.visibility = "visible";
            errorNombre.style.visibility = "hidden";
            pantallaNegraSign.classList.toggle('.modal-open-error');  
        } else if (apellido === ""){
            pantallaNegraSign.classList.toggle('.modal-open-error');  
            cruzErrorApellido.style.visibility = "visible";
            errorApellido.style.visibility = "hidden";
        } else if (correoElectronico === ""){
            pantallaNegraSign.classList.toggle('.modal-open-error');  
            cruzErrorMail.style.visibility = "visible";  
        } else if (contrasenia === ""){
            pantallaNegraSign.classList.toggle('.modal-open-error');  
            cruzErrorPassword.style.visibility = "visible";  
        } else if (nombreDeUsuario === ""){
            pantallaNegraSign.classList.toggle('.modal-open-error');  
            cruzErrorUser.style.visibility = "visible";  
        }
    } else {
        listaUsuarios.push(nuevoUsuario);
        errorCorreo.style.visibility = "hidden";
        cruzErrorMail.style.visibility = "hidden";
        errorApellido.style.visibility ="hidden";
        cruzErrorNombre.style.visibility = "hidden";
        cruzErrorPassword.style.visibility = "hidden";
        cruzErrorApellido.style.visibility ="hidden";
        errorNombre.style.visibility = "hidden";
        errorUser.style.visibility = "hidden";
        cruzErrorUser.style.visibility = "hidden";
        pantallaNegraSign.classList.remove('modal-open-sign');

        let nombreSesion = sessionStorage.getItem("inicioSesion");

        let sesionDerecha = document.createElement("h6");
        sesionDerecha.setAttribute("id", "sesionderecha");
        sesionDerecha.style.color = "#fff";
        sesionDerecha.style.fontWeight = "550";
        sesionDerecha.style.fontFamily = "'Lato', sans-serif;"
        sesionDerecha.innerHTML = nombreSesion;
        contenedorLoginSign.append(sesionDerecha);
       
        sesionIniciada = true;

        let timerInterval
        Swal.fire({
            html: '<div class="contenedor-logo-alert"><img src="../img/logo.png"></div>' + 
            '<div class="contenedor-titulo-alert"><h2 class="titulo-alert">WELCOME TO THE CYBER ARMY!</h2></div>' +
            '<div class="contenedor-btn-cyberarmy-alert"><button><h5>CYBER ARMY</h5></button></div>' +
            '<div class="contenedor-titulo-cyberarmy-alert"><h3 class="titulo-cyberarmy">Check out all the exclusive content!</h3></div>' ,
            background: '#000',
            timer: 4000,
            timerProgressBar: true,
            showCloseButton: true, 
            didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
                body.style.overflowY = "scroll"
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
                body.style.overflowY = "scroll";
            }
        })

        botonLogin.style.display = "none";
        botonSign.style.display = "none";
        barraRegistro.style.display = "none";
        

    }



    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        formulario.reset();
    });

    
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    return listaUsuarios;

});

alReadyMember.addEventListener("click", (event) => {
    event.preventDefault();
    pantallaNegraSign.classList.remove('modal-open-sign');
    pantallaNegra.classList.toggle('modal-open-login');
}) 

// Login
sendLogin.addEventListener("click", (event) => {


    let mail = mailUserLogin.value;
    let user =  mailUserLogin.value;
    let contraseniaLogin = passwordLogin.value;

    const existeMail = listaUsuarios.some(u => u.email === mail);
    const existeUser = listaUsuarios.some(c => c.username === user);
    const existePassword = listaUsuarios.some(i => i.password === contraseniaLogin);

    event.preventDefault();

    if((existeMail || existeUser) && existePassword){
        

        pantallaNegra.classList.remove('modal-open-login');

        if (existeMail){
            
            const usuario = listaUsuarios.find((user) => user.email === mail);

            sesionIniciada = true;

            usuarioName = usuario.username;

            sessionStorage.setItem("inicioSesionLoginMail", usuarioName);

            let nombreSesionLoginMail = sessionStorage.getItem("inicioSesionLoginMail");

            let sesionDerecha = document.createElement("h6");
            sesionDerecha.setAttribute("id", "sesionderecha");
            sesionDerecha.style.color = "#fff";
            sesionDerecha.style.fontWeight = "550";
            sesionDerecha.style.fontFamily = "'Lato', sans-serif;"
            sesionDerecha.innerHTML = nombreSesionLoginMail;
            contenedorLoginSign.append(sesionDerecha);

            botonLogin.style.display = "none";
            botonSign.style.display = "none";
            barraRegistro.style.display = "none";

            let timerInterval
            Swal.fire({
                html: '<div class="contenedor-logo-alert"><img src="../img/logo.png"></div>' + 
                `<div class="contenedor-titulo-alert"><h2 class="titulo-alert">Welcome again ${usuarioName} ! </h2></div> ` +
                '<div class="contenedor-btn-cyberarmy-alert"><button><h5>CYBER ARMY</h5></button></div>' +
                '<div class="contenedor-titulo-cyberarmy-alert"><h3 class="titulo-cyberarmy">Check out all the latest cyber army news!</h3></div>' ,
                background: '#000',
                timerProgressBar: true,
                showCloseButton: true, 
                timer: 4000,
                didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    body.style.overflowY = "scroll"
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                    body.style.overflowY = "scroll";
                }
                })
        } else if (existeUser) {
            
            sesionIniciada = true;
            
            sessionStorage.setItem("inicioSesionLoginUser", user);

            let nombreSesionLoginMail = sessionStorage.getItem("inicioSesionLoginUser");

            let sesionDerecha = document.createElement("h6");
            sesionDerecha.setAttribute("id", "sesionderecha");
            sesionDerecha.style.color = "#fff";
            sesionDerecha.style.fontWeight = "550";
            sesionDerecha.style.fontFamily = "'Lato', sans-serif;"
            sesionDerecha.innerHTML = nombreSesionLoginMail;
            contenedorLoginSign.append(sesionDerecha);

            botonLogin.style.display = "none";
            botonSign.style.display = "none";
            barraRegistro.style.display = "none";

            let timerInterval
            Swal.fire({
                    html: '<div class="contenedor-logo-alert"><img src="./img/logo.png"></div>' + 
                    `<div class="contenedor-titulo-alert"><h2 class="titulo-alert">Welcome again ${user} ! </h2></div> ` +
                    '<div class="contenedor-btn-cyberarmy-alert"><button><h5>CYBER ARMY</h5></button></div>' +
                    '<div class="contenedor-titulo-cyberarmy-alert"><h3 class="titulo-cyberarmy">Check out all the latest cyber army news!</h3></div>' ,
                    background: '#000',
                    timer: 4000,
                    timerProgressBar: true,
                    showCloseButton: true, 
                    didOpen: () => {
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                        body.style.overflowY = "scroll"
                    }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer');
                        body.style.overflowY = "scroll";
                }
            })
        }

        formularioLogin.reset();

    } else if (existeMail || existeUser) {

        pantallaNegra.classList.toggle('.modal-open-error');

        errorPasswordLogin.style.visibility = "visible";
        cruzErrorPasswordLogin.style.visibility = "visible";
    } else {
        
        pantallaNegra.classList.toggle('.modal-open-error');

        errorEmailUserLogin.style.visibility = "visible";
        cruzErrorEmailLogin.style.visibility = "visible";
        errorPasswordLogin.style.visibility = "visible";
        cruzErrorPasswordLogin.style.visibility = "visible";
    }

})

notMember.addEventListener("click", (event) => {
    event.preventDefault();
    pantallaNegra.classList.remove('modal-open-login');
    pantallaNegraSign.classList.toggle('modal-open-sign');

}) 

console.log(listaUsuarios)