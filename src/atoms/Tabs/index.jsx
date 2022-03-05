import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-cycle
import {
  TabsContainer, TabItem, TabEL, Icon
} from './style';
import Roboto from '../../ui/typography/inter';

export const defaultTabs = [
  { label: 'Publishers', value: 'publishers' },
  { label: 'Users', value: 'users' }];


const Tabs = ({
  tabs, onChange, tabType, selected, color, icon
}) => {
  const [selectedTab, setSelectedTab] = useState(selected);

  useEffect(() => {
    setSelectedTab(selected);
  }, [selected]);

  const handleOnclickTab = (tab) => {
    setSelectedTab(tab);
    if (onChange) onChange(tab);
  };

  return (
    <TabsContainer platform={localStorage.getItem('activeTabPlatform')} tabType={tabType} color={color}>
      {tabs.map((tab) => (
        <TabItem onClick={() => handleOnclickTab(tab)} key={tab.value} className={tab.value === selectedTab.value ? 'active' : ''} color={color}>
          <TabEL type={tab.value === selectedTab.value ? 'activeTab' : 'tab'}>
            {icon ? <Icon className={tab.icon} /> : null}
            <Roboto configuration={tabType === 'secondary' && { fontWeight: '500' }}>{tab.label}</Roboto>
          </TabEL>
        </TabItem>
      ))}
    </TabsContainer>
  );
};

Tabs.TYPE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

Tabs.defaultProps = {
  tabType: Tabs.TYPE.SECONDARY
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabType: PropTypes.string,
  selected: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  icon: PropTypes.string
};

export default connect(
  state => ({
    labels: state.app.selectedLabel
  }),
  dispatch => ({
  })
)(Tabs);
