import Login from './json/login.json';
import Logout from './json/logout.json';
import refreshToken from './json/refreshToken.json';
import publishersListByAccount from './json/publishersListByAccount.json';
import userList from './json/usersList.json';
import addPublisherToAccount from './json/addPublisherToAccount.json';
import updatePublisherInAccount from './json/updatePublisherInAccount.json';
import removePublisherFromAccount from './json/removePublisherFromAccount.json';
import switchUserType from './json/switchUserType.json';
import publishersList from './json/publishersList.json';
import publishersListAccountLogged from './json/publishersListAccountLogged.json';
import addPublisher from './json/addPublisher.json';
import updatePublisher from './json/updatePublisher.json';
import getAvailablePublisherByAccount from './json/getAvailablePublisherByAccount.json';
import YoutubeSearchResults from './json/youtubeSearchResults.json';
import dailySearchResults from './json/dailySearchResults.json';
import getDefaultTemplateByPublisher from './json/getDefaultTemplateByPublisher.json';
import getSftpOptionsByPublisher from './json/getSftpOptionsByPublisher.json';
import getHtmlBuildYT from './json/getHtmlBuildYT.json';
import getHtmlBuildDM from './json/getHtmlBuildDM.json';
import availablePlatform from './json/availablePlatform.json';
import labels from './json/labels.json';
import ytPlaylistPublisher from './json/ytPlaylistPublisher.json';

export const getBaseResponse = (
  { data = 'ok', code = 200, message = 'success' } = {},
  delay = 0
) => new Promise(res => {
  setTimeout(() => {
    res({ data }, code, message);
  }, delay);
});

export const authLoginMock = () => getBaseResponse({ data: Login });
export const authLogoutMock = () => getBaseResponse({ data: Logout });
export const authRefreshMock = () => getBaseResponse({ data: refreshToken });

// Account Logged Publishers List
export const publishersListAccountLoggedMock = () => getBaseResponse({ data: publishersListAccountLogged });

export const publishersListByAccountMock = () => getBaseResponse({ data: publishersListByAccount });
export const addPublisherToAccountMock = () => getBaseResponse({ data: addPublisherToAccount });
export const updatePublisherInAccountMock = () => getBaseResponse({ data: updatePublisherInAccount });
export const removePublisherFromAccountMock = () => getBaseResponse({ data: removePublisherFromAccount });
export const switchUserTypeMock = () => getBaseResponse({ data: switchUserType });
export const getAvailablePublisherByAccountMock = () => getBaseResponse({ data: getAvailablePublisherByAccount });

//userList mock
export const userListMock = () => getBaseResponse({ data: userList });
//publisherList mock
export const publishersListMock = () => getBaseResponse({ data: publishersList });
export const AddpublisherMock = () => getBaseResponse({ data: addPublisher });
export const EditPublisherMock = () => getBaseResponse({ data: updatePublisher });
export const getSftpOptionsByPublisherMock = () => getBaseResponse({ data: getSftpOptionsByPublisher });
export const availablePlatformMock = () => getBaseResponse({ data: availablePlatform });

// SEARCH VIDEO
export const YoutubeSearchResultsMock = () => getBaseResponse({ data: YoutubeSearchResults }, 2000);
export const getHtmlBuildYTMock = () => getBaseResponse({ data: getHtmlBuildYT });
export const dailySearchResultsMock = () => getBaseResponse({ data: dailySearchResults }, 2000);
export const getHtmlBuildDMMock = () => getBaseResponse({ data: getHtmlBuildDM });

// UPLOAD
export const ytPlaylistPublisherMock = () => getBaseResponse({ data: ytPlaylistPublisher });


// DEFAULT TEMPLATE BY PUBLISHER
export const getDefaultTemplateByPublisherMock = () => getBaseResponse({ data: getDefaultTemplateByPublisher });

export const getLabelsMock = () => getBaseResponse({ data: labels });
