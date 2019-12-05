import {
  fetchImagesFailure,
  fetchImagesRequest,
  fetchImagesSuccess,
  removeImageFailure,
  removeImageRequest,
  removeImageSuccess,
} from './actionCreators';
import {
  fetchImagesService,
  removeImageService,
} from './apiService';

export const fetchImagesAction = (params) => async (dispatch) => {
  try {
    dispatch(fetchImagesRequest());
    const { data } = await fetchImagesService(params);
    dispatch(fetchImagesSuccess(data));
  } catch (error) {
    dispatch(fetchImagesFailure(error.message));
  }
};

export const removeImageAction = (id) => async (dispatch) => {
  try {
    dispatch(removeImageRequest());
    await removeImageService(id);
    // By reason of mock request the program will be filter local images by image ID
    dispatch(removeImageSuccess(id));
  } catch (error) {
    dispatch(removeImageFailure(error.message));
  }
};
