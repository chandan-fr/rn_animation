/**
 * @format
 */

import { AppRegistry, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const newApp = () => {
    return (
        <>
            <StatusBar backgroundColor={"transparent"} translucent={true} />
            <App />
        </>
    )
};

AppRegistry.registerComponent(appName, () => newApp);
