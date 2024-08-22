
import express from "express"
import {updateUser, deleteUser, getSingleUser, getAllUser, getUserProfile, getMyAppointments} from "../controllers/userController.js"
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id",authenticate, restrict(['patient']), getSingleUser);
router.get("/",authenticate, restrict(['admin']), getAllUser);
router.put("/:id",authenticate, restrict(['patient']), updateUser);
router.delete("/:id",authenticate, restrict(['patient']), deleteUser);
router.get("/profile/me",authenticate, restrict(['patient']), getUserProfile);
<<<<<<< HEAD
router.delete("/appointments/my-appointments",authenticate, restrict(['patient']), getMyAppointments);
=======
router.get("appointments/my-appointments",authenticate, restrict(['patient']), getMyAppointments);
>>>>>>> f51f07b4c508cec8b71f52a97765050da49125bd

export default router;
