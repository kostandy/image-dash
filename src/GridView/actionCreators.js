import { IMAGE_LIST_FAILURE, IMAGE_LIST_REQUEST, IMAGE_LIST_SUCCESS } from './actionTypes';

export const fetchImagesRequest = () => ({
  type: IMAGE_LIST_REQUEST,
});

export const fetchImagesSuccess = (data) => ({
  type: IMAGE_LIST_SUCCESS,
  data,
});

export const fetchImagesFailure = (error) => ({
  type: IMAGE_LIST_FAILURE,
  error,
});
