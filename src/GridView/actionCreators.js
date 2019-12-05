import {
  IMAGE_LIST_FAILURE,
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_REMOVE_REQUEST,
  IMAGE_REMOVE_SUCCESS,
  IMAGE_REMOVE_FAILURE,
} from './actionTypes';

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

export const removeImageRequest = () => ({
  type: IMAGE_REMOVE_REQUEST,
});

export const removeImageSuccess = (imageID) => ({
  type: IMAGE_REMOVE_SUCCESS,
  removeImageID: imageID,
});

export const removeImageFailure = (error) => ({
  type: IMAGE_REMOVE_FAILURE,
  error,
});
