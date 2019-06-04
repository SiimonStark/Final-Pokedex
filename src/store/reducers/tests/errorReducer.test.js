import { errorReducer } from '../errorReducer';
import * as actions from '../../actions/';

describe('errorReducer', () => {
  it('should return intial state', () => {
    const expected = {
      isError: false, message: ''
    };
    const result = errorReducer(undefined, false);
    expect(result).toEqual(expected);
  })
  it('should return state w/ bool when case is DID_ERROR', () => {
    const mockBool = true;
    const mockMessage = 'Error Message';
    const expected = {isError: mockBool, message:mockMessage};
    const result = errorReducer(undefined, actions.errored(mockBool, mockMessage));

    expect(result).toEqual(expected)
  })
})