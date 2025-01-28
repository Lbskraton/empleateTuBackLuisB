import { Router } from "express";

import { isAuthenticate } from "../middlewares/auth.middleware";
import { UserController } from "@/controller/user.controller";
import { isAdmin } from "../middlewares/isAdmin.middleware";

const router=Router()


//puedes meter middleware en la ruta
router.get('/profile',isAuthenticate,UserController.profile)
router.get('/userlist',isAuthenticate,isAdmin,UserController.listUsers)


export default router