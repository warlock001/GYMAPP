const Meal = require("../models/meal");

class GetMealController {
  static async Execute(req, res) {
    const { id } = req.query;

    if (id != undefined && id.match(/^[0-9a-fA-F]{24}$/)) {
      var meal = await Meal.find({
        _id: id,
      });

      if (meal && meal.length > 0) {
        res.status(200).json({
          message: "Sucess",
          meal: meal,
        });
      } else {
        res.status(404).json({
          message: "No meal found",
        });
      }
    } else {
      var meal = await Meal.find();

      if (meal && meal.length > 0) {
        res.status(200).json({
          message: "Sucess",
          meal: meal,
        });
      } else {
        res.status(404).json({
          message: "No meal found",
        });
      }
    }
  }
}

module.exports = GetMealController;
