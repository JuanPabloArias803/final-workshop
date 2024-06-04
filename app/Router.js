import { routes } from "./helpers/routes";

export function Router(){

    const path=window.location.pathname;


    if(path==='/'){
        navigateTo('/login');
        return;
    }

    if(path==='/login'||path==='/register'){
        if(localStorage.getItem('token')){
            navigateTo('/tasks');
            return;
        }
    }

    const publicRoute=routes.public.find(route=>route.path===path);
    const privateRoute=routes.private.find(route=>route.path===path);
    if(publicRoute){
        publicRoute.page();
        return;
    }
    if(privateRoute){
        if(localStorage.getItem('token')){
            privateRoute.page();
            return;
        }
        navigateTo('/login');
        return;
    }
    navigateTo('/not-found');
    
}

export function navigateTo(path){
    window.history.pushState({},'',window.location.origin+path);
    Router();
}

window.addEventListener('popstate', Router);