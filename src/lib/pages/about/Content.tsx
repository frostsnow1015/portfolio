import type { BoxProps } from '@chakra-ui/react';
import { useColorModeValue, Heading, Link, Text } from '@chakra-ui/react';
import * as React from 'react';

import MotionBox from '~/lib/components/motion/MotionBox';
import { EVENT_TYPE_LINK } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/trackEvent';

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const handleClickInstagramLink = React.useCallback(() => {
    trackEvent({
      eventName: 'About: Click Instagram Link',
      eventData: { type: EVENT_TYPE_LINK },
    });
  }, []);

  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: 'spring' } },
        after: { opacity: 1, y: 0, transition: { type: 'spring' } },
      }}
      initial="before"
      animate="after"
    >
      <Text {...{ ...textProps, textColor }}>
        I&apos;m Michael, currently working as a Full Stack Engineer.Highly skilled full-stack web developer with [number] years of experience in building dynamic and responsive web applications. Proficient in a wide range of technologies including HTML, CSS, JavaScript, Node.js, React, Redux, Angular, Vue.js, MongoDB, MySQL, and AWS. Strong problem-solving skills and a passion for learning and applying new technologies.
      </Text>

     
    </MotionBox>
  );
};

export default Content;
