import { IPerson } from './objects.types';
export const weightCategory = {
    verySeverelyObese: 'Very Severely Obese',
    severelyObese: 'Severely Obese',
    moderatelyObese: 'Moderately Obese',
    overWeight: 'Over Weight',
    normalWeight: 'Normal weight',
    underWeight: 'Under Weight'
};

export const bmiCategoryLimit = {
    verySeverelyObese: 40,
    severelyObese: 35,
    moderatelyObese: 30,
    overWeight: 25,
    normalWeight: 18,
};

export const persons: IPerson[] = [{ gender: "Male", "heightCm": 171, "weightKg": 96 },
{ "gender": "Male", "heightCm": 160, "weightKg": 60 },
{ "gender": "Male", "heightCm": 180, "weightKg": 77 },
{ "gender": "Female", "heightCm": 166, "weightKg": 62 },
{ "gender": "Female", "heightCm": 150, "weightKg": 70 },
{ "gender": "Female", "heightCm": 167, "weightKg": 82 }];
