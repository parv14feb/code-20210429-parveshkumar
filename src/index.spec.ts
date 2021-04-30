import { overWeight} from './index';
import { expect } from "chai";
import "mocha";

describe('Overweight Count', () => {

  it('should return 1', () => {
    const result = overWeight;
    expect(result.length).to.equal(1);
  });

});