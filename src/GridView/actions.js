import { fetchImagesFailure, fetchImagesRequest, fetchImagesSuccess } from './actionCreators';
import getImages from './apiService';

const fetchImageList = (params) => async (dispatch) => {
  try {
    dispatch(fetchImagesRequest());
    const { data } = await getImages(params);
    dispatch(fetchImagesSuccess(data));
  } catch (error) {
    dispatch(fetchImagesFailure(error.message));
  }
};

export default fetchImageList;
