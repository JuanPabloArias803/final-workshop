import { Navbar } from "../../Components/navbar/navbar";
import { navigateTo } from "../../Router";
import { decryptData } from "../../helpers/encrypt";

export async function TasksScene(){
    const response = await fetch(`http://localhost:3000/users?id=${decryptData(localStorage.getItem('token'))}`);
    const loggedUser = await response.json();
    console.log(loggedUser);
    const root = document.getElementById('root');
    root.innerHTML=`
        ${Navbar(loggedUser[0].name)}
        <h1>Tasks</h1>
        <ul>
            <li>task 1</li>
            <li>task 2</li>
            <li>task 3</li>
        </ul>
    `;
    //logica
    const $logoutBtn=document.querySelector('#logout');
    $logoutBtn.addEventListener('click',()=>{
        localStorage.removeItem("token");
        navigateTo('/login');
    });
}