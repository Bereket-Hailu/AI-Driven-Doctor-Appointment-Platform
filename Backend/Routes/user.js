
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
router.get("appointments/my-appointments",authenticate, restrict(['patient']), getMyAppointments);
=======
router.delete("appointments/my-appointments",authenticate, restrict(['patient']), getMyAppointments);
>>>>>>> a709a73ad9aa069a9aa6fdee1477bead889eb05f

export default router;
