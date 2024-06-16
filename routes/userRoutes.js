const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");
const authMiddleware = require("../app/middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/edit", authMiddleware, userController.editUser);
router.put("/premium", authMiddleware, userController.upgradeToPremium);
router.put("/apihit", authMiddleware, userController.rechargeApiHit);

router.post("/accesstoken", userController.getAccessTokenFromSpotify);
router.get("/auth", userController.refreshToken);
router.get("/refresh_token", userController.renewAccessToken);
router.get("/authplay", userController.authorizePlayback);
router.get("/play/device/:trackUri/:accessToken", userController.playonotherdevice);

router.get("/email", authMiddleware, userController.getUsers);
router.get("/play/:user_id", authMiddleware, userController.getPlayingMusic);

module.exports = router;
