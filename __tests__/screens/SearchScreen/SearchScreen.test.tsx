import React from "react";
import {NCSearchScreen}  from "../../../screens";
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow } from 'enzyme'

configure({ adapter: new Adapter() })

jest.mock('@unimodules/react-native-adapter', () => ({}))
jest.mock('expo-constants', () => ({}))
jest.mock('expo-secure-store', () => ({}))
jest.mock('expo-app-auth', () => ({}))
jest.mock('expo-facebook', () => ({}))
jest.mock('@react-native-community/masked-view', () => ({}))
jest.mock('react-native-animatable', () => ({}))

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

jest.mock('react-native', () => ({
    View: '',
    StyleSheet: {
        create: jest.fn(e =>e),
      },
    Dimensions: {
        get: jest.fn(e =>e)
    }
}))

jest.mock('react-native-elements', () => ({
    SearchBar: ''
}))

jest.mock('react-native-gesture-handler', () => ({
    TouchableOpacity: '',
    FlatList: ''
}))

jest.mock('../../../services/ApiClient',()=>({
    constants:{
        manifest: {
            developer:{
                projectRoot: '/home/test/project',
            },
            logUrl: 'https://localhost:19001/logs',
            extra:{
                baseUrl: '192.168.1.1'
            }
        }
    },
}));


test('should render', () => {

    const props={
        FetchAllCategories: jest.fn(),
        GETSEARCHHISTORY: jest.fn(),
        UPDATESEARCHHISTORY: jest.fn(),
        navigation: jest.fn(),
        tags: ['look'],
        tagsId: ['1'],
        history: ['looks']
    }
    const wrapper = shallow(
        <NCSearchScreen {...props}/>
    );
    expect(wrapper).toMatchSnapshot();
});