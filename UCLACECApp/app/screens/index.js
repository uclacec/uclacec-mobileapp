import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import CECApp from './CECApp';
import SideBar from './sidebar';
import Loading from './Loading';

export default function (store, Provider) {
    Navigation.registerComponent('cecapp', () => CECApp, store, Provider);
    Navigation.registerComponent('sidebar', () => SideBar, store, Provider);
    Navigation.registerComponent('loading', () => Loading, store, Provider);
}
