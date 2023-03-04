import classNames from 'classnames';
import type { FC } from 'react';

import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import { useDeviceType } from '../../../../hooks/useDeviceType';
import { getMediaType } from '../../../../utils/get_media_type';
import { DeviceType, GetDeviceType } from '../../../foundation/GetDeviceType';
import { Image } from '../../../foundation/Image';

import * as styles from './MediaItemPreiewer.styles';

type Props = {
  file: MediaFileFragmentResponse;
};

export const MediaItemPreviewer: FC<Props> = ({ file }) => {
  const type = getMediaType(file.filename);
  const { isDesktop } = useDeviceType();

  return (
    <div className={styles.container()}>
      {type === 'image' && <Image fill src={file.filename} />}
      {type === 'video' && (
        <video
          autoPlay
          controls
          muted
          playsInline
          className={classNames(styles.video(), {
            [styles.video__desktop()]: isDesktop,
            [styles.video__mobile()]: !isDesktop,
          })}
          src={file.filename}
        />
      )}
    </div>
  );
};
