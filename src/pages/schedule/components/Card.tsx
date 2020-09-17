import React from 'react';
import { Card, Collapse, Avatar  } from 'antd';
import { EventsType } from 'umi';
import {
  getClosestTimes,
  secondsToRemain,
  timeFormat,
  getDayInChinese,
  getProgress,
} from '@/utils/gameTime';
import styles from './Card.less';

const { Meta } = Card;
const { Panel } = Collapse;

type PropsType = {
  now: Date;
} & { data: EventsType };

function CardShow({ now, data }: PropsType) {
  return (
    <div>
      <Card
        headStyle={{
          backgroundColor: data.titleBackgroundColor,
          fontWeight: 900,
          color: '#eeeeee',
        }}
        size="small"
        title={
          <div className={styles.card_title}>
            <img src={data.icon} />
            <span className={styles.card_title_text}>{data.title}</span>
          </div>
        }
      >
        <Collapse bordered={false} ghost={true} expandIconPosition="right">
          {data.events.map((event, index) => {
            const times = getClosestTimes(event.times, now, 7);
            const passedTime = getProgress(event.times, now);
            const latestCountdown = secondsToRemain(
              times[0].getTime() - now.getTime(),
              true,
            );
            return (
              <Panel
                key={index}
                style={
                  passedTime !== -1
                    ? { backgroundColor: data.inProgressBackgroundColor }
                    : {}
                }
                header={
                  <div className={styles.pannel_header}>
                    <Meta
                      avatar={<Avatar size={56} src={event.icon} />}
                      title={event.name}
                      description={
                        (times[0].getDay() === now.getDay()
                          ? '今天 '
                          : `星期${getDayInChinese(times[0])} `) +
                        `${timeFormat(times[0].getHours())}:${timeFormat(
                          times[0].getMinutes(),
                        )}`
                      }
                    />
                    <div className={styles.pannel_header_countdown}>
                      {passedTime == -1
                        ? latestCountdown
                        : '进行中 ' + secondsToRemain(passedTime, true)}
                    </div>
                  </div>
                }
              >
                {times.map((time, index) => {
                  const countdown = secondsToRemain(
                    time.getTime() - now.getTime(),
                    true,
                  );
                  return (
                    <div key={index} className={styles.pannel_content}>
                      <p>{`星期${getDayInChinese(time)} ${timeFormat(
                        time.getHours(),
                      )}:${timeFormat(time.getMinutes())}`}</p>
                      <p>{countdown}</p>
                    </div>
                  );
                })}
              </Panel>
            );
          })}
        </Collapse>
      </Card>
    </div>
  );
}

export default React.memo(CardShow);
