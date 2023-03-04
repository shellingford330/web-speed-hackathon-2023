import type { FC } from 'react';

import { Layout } from '../../components/application/Layout';

import * as styles from './Fallback.styles';

export const Fallback: FC = () => (
  <>
    <title>エラーが発生しました</title>
    <Layout>
      <div className={styles.container()}>
        <div className={styles.inner()}>
          <p className={styles.mainParagraph()}>エラーが発生しました</p>
          <p className={styles.subParagraph()}>Some error has occurred</p>
        </div>
      </div>
    </Layout>
  </>
);
