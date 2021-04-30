import { overWeight } from './bmiCalculator';
import { weightCategory } from './constants';
const result = overWeight();
console.table(result);

const overWeightFound = result.filter(x => x.userBmi == weightCategory.overWeight);
console.log("Over Weight",overWeightFound.length);

