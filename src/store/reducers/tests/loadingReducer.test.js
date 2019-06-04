import { loadingReducer } from '../loadingReducer';
import * as actions from '../../actions/';

describe('loadingReducer', () => {
  it('should return intial state', () => {
    const expected = true;
    const result = loadingReducer(undefined, true);
    expect(result).toEqual(expected);
  })
  it('should return state w/ bool when case is IS_LOADING', () => {
    let mockBool = false
    const expected = mockBool;
    const result = loadingReducer(undefined, actions.loaded(mockBool));

    expect(result).toEqual(expected)
  })
})