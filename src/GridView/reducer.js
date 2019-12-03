import {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAILURE,
} from './actionTypes';

const initialState = {
  isLoading: false,
  images: [],
  error: undefined,
};

const gridViewReducer = (state = initialState, {
  type, data, error,
}) => {
  switch (type) {
    case IMAGE_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case IMAGE_LIST_SUCCESS:
      return {
        ...state,
        images: data,
        isLoading: false,
      };
    case IMAGE_LIST_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default gridViewReducer;
