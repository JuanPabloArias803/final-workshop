import { encryptData } from "../../helpers/encrypt";
import { decryptData } from "../../helpers/encrypt";
import { navigateTo } from "../../Router";

export function LoginScene(){
    const root=document.getElementById('root');
    root.innerHTML=`
        <form>
            <h2>Iniciar Sesión</h2>
            <input type="email" placeholder="User Email" autocomplete="email"></input>
            <input type="password" placeholder="Password" autocomplete="current-password"></input>
            <button type="submit">Iniciar Sesión</button>
        </form>
        <p>No estás registrado?</p>
        <button id="registerBtn">Registrate!</button>
    `;

    //logica
    const $useremail=root.querySelector('input[type="email"]');
    const $password=root.querySelector('input[type="password"]');
    const $form=root.querySelector('form');
    const $registerBtn=root.querySelector('#registerBtn');
    $form.addEventListener('submit',async (event)=>{
        event.preventDefault();
        if(!$useremail.value || !$password.value){
            alert("Por favor rellena todos los campos");
            return;
        }
        try{
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();
            let flag=false;
            users.forEach(user => {
                if(user.email===$useremail.value&&decryptData(user.password)==$password.value){
                    flag=true;
                    $form.reset();
                    localStorage.setItem("token", encryptData(user.id));
                    navigateTo('/tasks');
                }
            });
            if(flag==false){
                throw new Error("Usuario o contraseña incorrectos");
            }
        }catch(error){
            alert("Ocurrió un error "+error)
        }
    });
    $registerBtn.addEventListener('click',()=>navigateTo('/register'));
}