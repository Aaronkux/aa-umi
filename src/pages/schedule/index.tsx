import React, { FC, useEffect } from 'react';
import { useGameTime } from '@/utils/gameTime';
import { Row, Col } from 'antd';
import { ActivityState, ConnectProps, Loading, connect, EventsType } from 'umi';
import useMedia from '@/utils/useMedia';
import config from '@/utils/config';
import { CardShow } from './components';
import styles from './index.less';

interface PropTypes extends ConnectProps {
  activities: { [prop: string]: EventsType };
  position: {
    '1': [string[]];
    '2': [string[], string[]];
    '3': [string[], string[], string[]];
  };
  now: Date;
  loading: Loading;
}

const Schedule: FC<PropTypes> = ({ activities, position, now, loading }) => {
  // get time in game
  const { hour, minutes, timezone } = useGameTime(now);
  // getColum
  let column = useMedia(config.queryList, [3, 2], 1);
  return (
    <>
      <div className={styles.header}>
        <div>时区: {timezone}</div>
        <div>
          游戏时间: {hour}:{minutes}
        </div>
      </div>
      <Row gutter={16}>
        {Array(column)
          .fill(0)
          .map((_, index) => (
            <Col
              key={index}
              className={styles.content_main_column}
              span={24 / column}
            >
              {position[column as 1 | 2 | 3][index].map(id => {
                const data = activities[id];
                return (
                  <Row key={data.title} gutter={[0, 20]}>
                    <Col span={24}>
                      <CardShow data={data} now={now} />
                    </Col>
                  </Row>
                );
              })}
            </Col>
          ))}
      </Row>
    </>
  );
};

export default connect(
  ({ activity, loading }: { activity: ActivityState; loading: Loading }) => ({
    activities: activity.activities,
    position: activity.position,
    now: activity.now,
    loading: loading.models.activity,
  }),
)(React.memo(Schedule));
