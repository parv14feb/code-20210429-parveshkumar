import { weightCategory, bmiCategoryLimit,persons } from './constants';
import { IPerson } from './objects.types';


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


export const overWeight = () => {
    let personModified: IPerson[];
    personModified = [];
    persons.map((person) => {
        const { gender, heightCm, weightKg } = person;
        personModified.push(new BMICalculator(gender, heightCm, weightKg));
    })
    //const overWeight1 = personModified.filter(x => x.userBmi == weightCategory.overWeight);
    return personModified;
};
