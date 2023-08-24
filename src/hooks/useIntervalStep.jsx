import { useEffect, useRef, useState } from 'react';

export const useIntervalStep = ({ accordionData }) => {
  const [expanded, setExpanded] = useState(accordionData[0].key);
  const [percent, setPercent] = useState(0);
  const [isInterval, setIsInterval] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const interval = useRef(null);

  const onPause = () => {
    setIsPause(true);
  };

  const onStart = () => {
    setIsPause(false);
  };

  const handleInView = (inView) => {
    if (inView) onStart();
    else onPause();
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      if (!isPause) {
        setPercent((prevState) => {
          if (prevState === 250) return 0;
          return prevState + 1;
        });
      }
    }, 100);

    return () => {
      clearInterval(interval.current);
    };
  }, [isPause]);

  useEffect(() => {
    if (percent === 250) {
      setExpanded((prevState) => {
        const nextState = prevState + 1;

        if (prevState === accordionData.length - 1) {
          return 0;
        }

        return nextState;
      });
      setPercent(0);
    }
  }, [percent]);

  const getPercent = (number, total) => (number / total) * 100;

  // eslint-disable-next-line no-shadow
  const setWidth = ({ isInterval, expanded, percent, count }) => {
    if (expanded === count) {
      return isInterval ? getPercent(percent, 250) : 100;
    }

    return isInterval ? getPercent(percent, 250) : 100;
  };

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    clearInterval(interval.current);
    setIsInterval(false);
  };

  return {
    handleChange,
    handleInView,
    setWidth,
    expanded,
    isInterval,
    percent,
  };
};
