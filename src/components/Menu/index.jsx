import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import Select from 'react-select';
import compose from '../../redux/compose';

import {
  MenuContainer,
  Left,
  Right,
  LinksContainer,
  PublishersWrapper,
  UserWrapper,
  Logout,
  LogoWrapper,
  Logo,
  MobileMenu,
  WrapperLogoutUser,
  UserType,
  LinkNameWrapper,
  LangWrapper
} from './style';
import { AUTH_LOGOUT } from '../../redux/actions/auth';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import Roboto from '../../ui/typography/inter';
import Icon from '../../atoms/Icon';
import theme from '../../ui/theme';
import { SET_SELECTED_LABELS, SET_SELECTED_PUBLISHERS } from '../../redux/actions';
import HamburgerMenu from '../../atoms/HamburgerMenu';
import CustomSelect from '../../atoms/CustomSelect';
import { customStylesSelectLang, customStylesSelectMenu, getLabelValue } from '../../utils/common';
import storage from '../../utils/storage';


const initialMenuLinksList = [
  {
    title: 'Search',
    to: '/search',
    visible: true,
    icon: 'icon-search'
  },
  {
    title: 'Upload',
    to: '/upload',
    visible: true,
    icon: 'icon-upload'
  },
  {
    title: 'Admin',
    to: '/admin',
    visible: true,
    icon: 'icon-settings'
  }
];

const selectedLabelStorage = 'selectedLabel';

const renderFlag = (language) => (
  <div style={{ width: '20px', height: '20px' }}>
  </div>
);

const Menu = ({
  name, surname, logout, publishers, selectedPublisher, setSelectPublisher, mediaIsTablet, mediaIsPhone, userType, labels, labelsList, setSelectedLang
}) => {
  const [listPublishers, setListPublishers] = useState([]);
  const [publisherSelected, setPublisherSelected] = useState('');
  const [listLabels, setListLabels] = useState([]);
  const [langSelected, setLangSelected] = useState();
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const [menuLinksList, setMenuLinksList] = useState(initialMenuLinksList);

  useEffect(() => {
    setMenuLinksList([
      {
        title: getLabelValue('menu_label_search', labels),
        to: '/search',
        visible: true,
        icon: 'icon-search'
      },
      {
        title: getLabelValue('menu_label_upload', labels),
        to: '/upload',
        visible: true,
        icon: 'icon-upload'
      },
      {
        title: getLabelValue('menu_label_admin', labels),
        to: '/admin',
        visible: true,
        icon: 'icon-settings'
      }
    ]);
  }, [labels]);

  useEffect(() => {
    const listPub = publishers.reduce((acc, item) => [
      ...acc, { label: item.name, value: item.name }], []);
    setListPublishers(listPub);
  }, [publishers]);

  useEffect(() => {
    const listLab = Object.keys(labelsList).reduce((acc, item) => [
      ...acc, { label: renderFlag(item), value: item }
    ], []);
    const selectedFlag = storage.read(selectedLabelStorage)?.value || 'en';
    const selected = listLab.find(item => item.value === selectedFlag);
    setLangSelected(selected || '');
    setListLabels(listLab);
  }, [labelsList]);

  useEffect(() => {
    const selected = { label: selectedPublisher.name, value: selectedPublisher.name };
    setPublisherSelected(selected);
  }, [selectedPublisher, setSelectPublisher]);

  useEffect(() => {
    const { role } = selectedPublisher;
    if (userType === 'member') {
      const newMenuList = menuLinksList.reduce((acc, link) => {
        const isVisible = !((role === 'editor' && link.to === '/upload') || (link.to === '/admin'));
        return [...acc, { ...link, visible: isVisible }];
      }, []);
      setMenuLinksList(newMenuList);
    }
  }, [publisherSelected, setSelectPublisher, userType, labels]);


  const handleOnchangeSelected = (value) => {
    const selectedPub = publishers.filter(el => el.name === value.value)[0];
    setSelectPublisher(selectedPub);
  };

  const handleOnchangeLang = (value) => {
    const selectedLang = listLabels.filter(el => el.value === value.value)[0];
    setLangSelected(selectedLang);
    setSelectedLang(selectedLang.value);
  };

  return (
    <MenuContainer>
      {((mediaIsPhone || mediaIsTablet) && mobileMenuVisibility) && (
        <>
          <LangWrapper>
            <CustomSelect
              styles={customStylesSelectLang}
              options={listLabels}
              value={langSelected}
              onChange={handleOnchangeLang}
            />
          </LangWrapper>
          <MobileMenu>
            {((publishers?.length > 0 && userType !== 'member')
                || (userType === 'member' && publishers.length > 0)) && (
                <PublishersWrapper>
                  <Roboto>{getLabelValue('menu_label_selected_publisher', labels)}</Roboto>
                  <CustomSelect
                    styles={customStylesSelectMenu}
                    options={listPublishers}
                    value={publisherSelected}
                    onChange={handleOnchangeSelected}
                  />
                </PublishersWrapper>
            )}
            <LinksContainer isHidden={publishers?.length <= 0 && userType === 'member'}>
              {menuLinksList.map(link => (link.visible ? (
                <NavLink
                  exact
                  to={link.to}
                  activeClassName="menuActive"
                  onClick={() => setMobileMenuVisibility(false)}
                  visible={link.visible}
                >
                  <LinkNameWrapper>
                    <Icon type={link.icon} size={19} color={theme.colors.custom.darkText} />
                    <Roboto configuration={{ fontSize: 12 }}>{link.title}</Roboto>
                  </LinkNameWrapper>
                  <Icon type="icon-back" rotate={180} size={20} color={theme.colors.custom.blue} />
                </NavLink>
              ) : null))}
            </LinksContainer>
            <WrapperLogoutUser>
              <UserWrapper>
                <Roboto type="headerUser">{`${name} ${surname}`}</Roboto>
                <UserType>{selectedPublisher?.role}</UserType>
              </UserWrapper>
              <Logout onClick={logout}>
                <Icon type="icon-logout" size={23} color={theme.colors.custom.darkText} />
              </Logout>
            </WrapperLogoutUser>
          </MobileMenu>
        </>
      )}
      <Left>
        <LogoWrapper>
          <NavLink
            exact
            to="/search"
          >

          </NavLink>
        </LogoWrapper>
        {(!mediaIsPhone && !mediaIsTablet) && (
          <LinksContainer isHidden={publishers?.length <= 0 && userType === 'member'}>
            {menuLinksList.map(link => (link.visible ? (
              <>
                <NavLink
                  exact
                  to={link.to}
                  activeClassName="menuActive"
                  onClick={() => setMobileMenuVisibility(false)}
                  visible={link.visible}
                >
                  <Icon type={link.icon} size={19} color={theme.colors.custom.darkText} />
                  <Roboto configuration={{ fontSize: 12 }}>{link.title}</Roboto>
                </NavLink>
              </>
            ) : null))}
          </LinksContainer>
        )}
      </Left>
      <Right>
        {(!mediaIsPhone && !mediaIsTablet) ? (
          <>
            {((publishers?.length > 0 && userType !== 'member')
              || (userType === 'member' && publishers.length > 0)) && (
              <PublishersWrapper>
                <Roboto>{getLabelValue('menu_label_selected_publisher', labels)}</Roboto>
                <CustomSelect
                  styles={customStylesSelectMenu}
                  options={listPublishers}
                  value={publisherSelected}
                  onChange={handleOnchangeSelected}
                />
              </PublishersWrapper>
            )}
            <UserWrapper>
              <Roboto type="headerUser">{`${name} ${surname}`}</Roboto>
              <UserType>{selectedPublisher?.role}</UserType>
            </UserWrapper>
            <LangWrapper>
              <CustomSelect
                styles={customStylesSelectLang}
                options={listLabels}
                value={langSelected}
                onChange={handleOnchangeLang}
              />
            </LangWrapper>
            <Logout onClick={logout}>
              <Icon type="icon-logout" size={23} color={theme.colors.custom.darkText} />
            </Logout>
          </>
        ) : (
          <HamburgerMenu
            onClick={() => setMobileMenuVisibility(!mobileMenuVisibility)}
            open={mobileMenuVisibility}
          />
        )}
      </Right>
    </MenuContainer>

  );
};

Menu.propTypes = {
  // State
  publishers: PropTypes.array,
  selectedPublisher: PropTypes.array,

  // Menu
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  logout: PropTypes.node,
  setSelectPublisher: PropTypes.func
};

const composed = compose(
  connect(
    state => {
      const {
        user_data: {
          name,
          surname,
          type: userType
        } = {}
      } = state.auth;

      const publishers = state.app.publishersList;
      const { selectedPublisher } = state.app;

      return {
        name,
        surname,
        userType,
        publishers,
        selectedPublisher,
        labels: state.app.selectedLabel,
        labelsList: state.app.labels
      };
    },
    dispatch => ({
      logout: () => dispatch({ type: AUTH_LOGOUT._REQUEST }),
      setSelectPublisher: publisher => dispatch({ type: SET_SELECTED_PUBLISHERS, publisher }),
      setSelectedLang: label => dispatch({ type: SET_SELECTED_LABELS, label })
    })
  ),
  withMediaQueries
)(Menu);
export default composed;
