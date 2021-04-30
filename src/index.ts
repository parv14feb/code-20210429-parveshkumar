import { weightCategory, bmiCategoryLimit } from './constants';
interface IPerson {
    gender: string;
    heightCm: number;
    weightKg: number;
    userBmi?: string;
}


const persons: IPerson[] = [{ gender: "Male", "heightCm": 171, "weightKg": 96 },
{ "gender": "Male", "heightCm": 160, "weightKg": 60 },
{ "gender": "Male", "heightCm": 180, "weightKg": 77 },
{ "gender": "Female", "heightCm": 166, "weightKg": 62 },
{ "gender": "Female", "heightCm": 150, "weightKg": 70 },
{ "gender": "Female", "heightCm": 167, "weightKg": 82 }];


class BMICalculator {
    public userBmi = "";
    constructor(public gender: string, public heightCm: number, public weightKg: number) {
        this.gender = gender;
        this.heightCm = heightCm;
        this.weightKg = weightKg;
        this.userBmi = this.describeBMI()
    }

    calcBMI(): number {
        return (this.weightKg / ((this.heightCm * this.heightCm) / 10000));
    }

    describeBMI(): string {
        const bmi = this.calcBMI();
        switch (true) {
            case (bmi >= bmiCategoryLimit.verySeverelyObese):
                return weightCategory.verySeverelyObese;
            case (bmi >= bmiCategoryLimit.severelyObese && bmi < bmiCategoryLimit.verySeverelyObese):
                return weightCategory.severelyObese;
            case (bmi >= bmiCategoryLimit.moderatelyObese && bmi < bmiCategoryLimit.severelyObese):
                return weightCategory.moderatelyObese;
            case (bmi >= bmiCategoryLimit.overWeight && bmi < bmiCategoryLimit.moderatelyObese):
                return weightCategory.overWeight;
            case (bmi > bmiCategoryLimit.normalWeight && bmi < bmiCategoryLimit.overWeight):
                return weightCategory.normalWeight;
            default:
                return weightCategory.underWeight;
        }

    }
}


export const overWeight = (() => {
    let personModified: IPerson[];
    personModified = [];
    persons.map((person) => {
        const { gender, heightCm, weightKg } = person;
        personModified.push(new BMICalculator(gender, heightCm, weightKg));
    })

    return personModified.filter(x => x.userBmi == weightCategory.overWeight);

})();
