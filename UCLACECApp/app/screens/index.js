import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import CECApp from './CECApp';
import SideBar from './sidebar';

export default function (store, Provider) {
    Navigation.registerComponent('cecapp', () => CECApp, store, Provider);
    Navigation.registerComponent('sidebar', () => SideBar, store, Provider);
}
