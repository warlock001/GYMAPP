const postMeal = require("../controllers/postMeal");
const getMeal = require("../controllers/getMeal");

const Router = require("express").Router();
const auth = require("../middlewares/adminAuth");

module.exports = (upload) => {

    Router.post(
        "/meal",

        upload.single("image"),
        async (req, res, next) => {
            postMeal.Execute(req, res, next);
        });


    Router.get(
        "/meal",
        async (req, res, next) => {
            getMeal.Execute(req, res, next);
        });

    return Router;

}