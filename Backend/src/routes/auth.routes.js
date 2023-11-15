import { Router } from "express";
import { login, logout, register,profile} from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/auth.Token.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {registerSchema, loginSchema} from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login",  validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;