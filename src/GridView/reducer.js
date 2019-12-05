import {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAILURE,
  IMAGE_REMOVE_REQUEST,
  IMAGE_REMOVE_SUCCESS,
  IMAGE_REMOVE_FAILURE,
} from './actionTypes';

const initialState = {
  isLoading: false,
  images: [],
  error: undefined,
};

const gridViewReducer = (state = initialState, {
  type, data, error, removeImageID,
}) => {
  switch (type) {
    case IMAGE_LIST_REQUEST:
    case IMAGE_REMOVE_REQUEST:
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
    case IMAGE_REMOVE_SUCCESS:
      return {
        ...state,
        images: state.images.filter((image) => image.id !== removeImageID),
        isLoading: false,
      };
    case IMAGE_LIST_FAILURE:
    case IMAGE_REMOVE_FAILURE:
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
