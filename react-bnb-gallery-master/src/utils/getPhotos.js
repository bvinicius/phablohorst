import { defaultPhotoProps } from '../constants';

export function processPhoto(photo, index) {
  return Object.assign({}, defaultPhotoProps, typeof photo === 'string'
    ? { number: (index + 1), photo }
    : { ...photo, number: (index + 1) });
}

export default function getPhotos(photos) {
  return photos.map(processPhoto);
}
