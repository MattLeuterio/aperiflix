import React from 'react';
import PropTypes from 'prop-types';

import { BottleRender } from './style';
import FullBottle from '../../ui/assets/img/rating/bottle-full.png';
import HalfBottle from '../../ui/assets/img/rating/bottle-half.png';
import EmptyBottle from '../../ui/assets/img/rating/bottle-empty.png';

const RenderBottles = ({
  vote,
}) => {
  switch (vote) {
    case 0:
      return (
        <>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 0.5:
      return (
        <>
          <BottleRender srcBg={HalfBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 1:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 1.5:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={HalfBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 2:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 2.5:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={HalfBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 3:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 3.5:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={HalfBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 4:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
      break;
    case 4.5:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={HalfBottle}>
          </BottleRender>
        </>
      )
      break;
    case 5:
      return (
        <>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
          <BottleRender srcBg={EmptyBottle}>
          </BottleRender>
        </>
      )
      break;
    default:
      return (
        <>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
          <BottleRender srcBg={FullBottle}>
          </BottleRender>
        </>
      )
  }
};

export default RenderBottles;
