import { getMediaType } from "../../../../utils/get_media_type";

export const loadThumbnail = async (url: string) => {
  const mediaType = getMediaType(url);

  if (mediaType == 'image') {
    return `/thumbnails${url}`
  }

  return `/thumbnails${url.replace('webm', 'avif')}`;
};
