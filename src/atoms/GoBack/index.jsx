import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  GoBackContainer
} from './style';
import theme from '../../ui/theme';

import Icon from '../Icon';
import Roboto from '../../ui/typography/inter';
import { withMediaQueries } from '../../hoc/withMediaQueries';
// eslint-disable-next-line import/no-cycle
import { HtmlRaw } from '../../components';

const GoBack = ({
  text = 'Back', iconSize = 24, typeRoboto = 'goBack',
  mediaIsPhone
}) => {
  const history = useHistory();

  return (
    <GoBackContainer>
      <Icon
        type="icon-back"
        size={mediaIsPhone ? 18 : iconSize}
        color={theme.colors.custom.blue}
        onClick={() => history.goBack()}
      />
      <Roboto type={typeRoboto} configuration={mediaIsPhone && { fontSize: 18 }}><HtmlRaw html={text} /></Roboto>
    </GoBackContainer>
  );
};

GoBack.propTypes = {
  text: PropTypes.string,
  iconSize: PropTypes.number,
  typeRoboto: PropTypes.string
};

export default withMediaQueries(GoBack);
