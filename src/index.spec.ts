import { overWeight } from './bmiCalculator';
import { weightCategory } from './constants';
import { expect } from "chai";
import "mocha";

describe('Overweight Count', () => {

  it('should return 1', () => {
    const result = overWeight();

    const overWeightFound = result.filter(x => x.userBmi == weightCategory.overWeight);
    expect(overWeightFound.length).to.equal(1);
  });

});