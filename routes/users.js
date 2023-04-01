const express = require("express");
const multer = require("multer"); // 파일 디코딩 패키지
const database = require("../data/database");

const router = express.Router();

// 파일 저장 경로 및 파일 이름 설정
const storage = multer.diskStorage({
  // 파일 저장 경로: "/images"
  destination: function(req, file, cb) {
    cb(null, "images");
  },
  // 파일 이름
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get("/", async function(req, res) {
  const users = await database.getDb().collection("users").find().toArray();
  res.render("profiles", {users: users});
});

router.get("/new-user", function(req, res) {
  res.render("new-user");
})

// upload.single("파일 데이터 name 속성")
router.post("/profiles", upload.single("userimage"), async function(req, res) {
  const userFile = req.file;
  const userData = req.body;

  await database.getDb().collection("users").insertOne({name: userData.username, path: userFile.path});

  res.redirect("/");
})

module.exports = router;