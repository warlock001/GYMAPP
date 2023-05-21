const Meal = require("../models/meal");
const File = require("../models/file");

class MealController {
  static async Execute(req, res) {
    const {
      name,
      quantity,
      calories,
      protein,
      fat,
      carbs,
      sodium,
      pottasium,
      magnesium,
      vitamin_c,
      cholestrol,
    } = req.body;

    if (
      !name ||
      !quantity ||
      !calories ||
      !protein ||
      !fat ||
      !carbs ||
      !sodium ||
      !pottasium ||
      !magnesium ||
      !vitamin_c ||
      !cholestrol ||
      !req.file
    ) {
      res.status(400).json({
        message: `Invalid Request`,
      });
    } else {
      var final_file = {
        file: req.file.filename,
        contentType: req.file.mimetype,
        docOF: req.route.path,
      };

      File.create(final_file)
        .then((result) => {
          Meal.create({
            name: name,
            quantity: quantity,
            calories: calories,
            protein: protein,
            fat: fat,
            carbs: carbs,
            pottasium: pottasium,
            sodium: sodium,
            magnesium: magnesium,
            vitamin_c: vitamin_c,
            cholestrol: cholestrol,
            file: result._id,
          })
            .then(() => {
              res.status(200).json({
                message: `Meal Saved.`,
              });
            })
            .catch((err) => {
              res.status(400).json({
                message: `Error: ${err}`,
              });
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

module.exports = MealController;
