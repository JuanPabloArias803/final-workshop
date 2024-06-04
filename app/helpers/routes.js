import { LoginScene } from "../Pages/public/LoginScene";
import { NotFound } from "../Pages/public/notFound";
import { RegisterScene } from "../Pages/public/registerScene";
import { TasksScene } from "../Pages/private/tasksScene";

export const routes = {
    public : [
        {path: '/not-found', page: NotFound},
        {path: '/login', page: LoginScene},
        {path: '/register', page: RegisterScene},
    ],
    private : [
        {path: '/tasks',page:TasksScene}
    ]
}