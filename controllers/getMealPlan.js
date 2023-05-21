const MealPlan = require("../models/mealPlan");

class GetMealPlanController {
  static async Execute(req, res) {
    const { id } = req.query;

    if (id != undefined && id.match(/^[0-9a-fA-F]{24}$/)) {
      var mealPlan = await MealPlan.find({
        user: id,
      })
        .populate({
          path: "user",
        })
        .populate({
          path: "meals",
        });

      if (mealPlan && mealPlan.length > 0) {
        res.status(200).json({
          message: "Sucess",
          mealPlan: mealPlan,
        });
      } else {
        res.status(404).json({
          message: "No meal found",
        });
      }
    } else {
      var mealPlan = await MealPlan.find()
        .populate({
          path: "user",
        })
        .populate({
          path: "meals",
        });

      if (mealPlan && mealPlan.length > 0) {
        res.status(200).json({
          message: "Sucess",
          mealPlan: mealPlan,
        });
      } else {
        res.status(404).json({
          message: "No meal found",
        });
      }
    }
  }
}

module.exports = GetMealPlanController;
