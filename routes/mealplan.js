const MealPlanRouter = require("express").Router();

const postMealPlanController = require("../controllers/postMealPlan");
const getMealPlanController = require("../controllers/getMealPlan");

MealPlanRouter.post("/mealPlan", async (req, res) => {
  postMealPlanController.Execute(req, res);
});

MealPlanRouter.get("/mealPlan", async (req, res) => {
  getMealPlanController.Execute(req, res);
});

module.exports = MealPlanRouter;
