import { Navigation } from 'react-native-navigation';

import CECApp from './CECApp';
import SideBar from './sidebar';


export default function () {
    Navigation.registerComponent('cecapp', () => CECApp);
    Navigation.registerComponent('sidebar', () => SideBar);

}