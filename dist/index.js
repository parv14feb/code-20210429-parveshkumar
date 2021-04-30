"use strict";
var BMICalculator = /** @class */ (function () {
    function BMICalculator(gender, heightCm, weightKg) {
        this.gender = gender;
        this.heightCm = heightCm;
        this.weightKg = weightKg;
        this.userBmi = "";
        this.gender = gender;
        this.heightCm = heightCm;
        this.weightKg = weightKg;
        this.userBmi = this.describeBMI();
    }
    BMICalculator.prototype.calcBMI = function () {
        return this.weightKg / (this.heightCm);
    };
    BMICalculator.prototype.describeBMI = function () {
        var bmi = this.calcBMI();
        if (bmi > 30) {
            return "Feit";
        }
        else if (bmi > 25 && bmi < 29.99) {
            return "Overvektig";
        }
        else if (bmi > 18.5 && bmi < 24.99) {
            return "Sunn";
        }
        else {
            return "Undervektig";
        }
        ;
    };
    return BMICalculator;
}());
(function () {
    var persons = [{ gender: "Male", "heightCm": 171, "weightKg": 96 }, { "gender": "Male", "heightCm": 161, "weightKg": 85 }, { "gender": "Male", "heightCm": 180, "weightKg": 77 }, { "gender": "Female", "heightCm": 166,
            "weightKg": 62 }, { "gender": "Female", "heightCm": 150, "weightKg": 70 }, { "gender": "Female", "heightCm": 167, "weightKg": 82 }];
    persons.map(function (person) {
        var gender = person.gender, heightCm = person.heightCm, weightKg = person.weightKg;
        console.log(new BMICalculator(gender, heightCm, weightKg));
    });
})();
