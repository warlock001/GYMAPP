const MealPlan = require("../models/mealPlan");

class MealPlanController {
  static async Execute(req, res) {
    const { user, meals } = req.body;

    if (!user || meals.length == 0) {
      res.status(400).json({
        message: `Invalid Request`,
      });
    } else {
      var mealPlan = await MealPlan.find({
        user: user,
      });

      if (mealPlan && mealPlan.length > 0) {
        res.status(400).json({
          message: `Meal plan already exist for this user`,
        });
      } else {
        MealPlan.create({
          user: user,
          meals: meals,
        })
          .then(() => {
            res.status(200).json({
              message: `Meal Plan Generated.`,
            });
          })
          .catch((err) => {
            res.status(400).json({
              message: `Error: ${err}`,
            });
          });
      }
    }
  }
}

module.exports = MealPlanController;
