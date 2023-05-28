import React from "react";
import {NCSearchResultScreen}  from "../../../screens";
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow } from 'enzyme'
import Look from "../../../entities/Look";
import User from "../../../entities/User";

configure({ adapter: new Adapter() })

jest.mock('@unimodules/react-native-adapter', () => ({}))
jest.mock('expo-av', () => ({}))
jest.mock('@react-native-community/viewpager', () => ({}))
jest.mock('@react-native-community/netinfo', () => ({}))
jest.mock('expo-secure-store', () => ({}))
jest.mock('expo-constants', () => ({}))
jest.mock('expo-app-auth', () => ({}))
jest.mock('expo-facebook', () => ({}))
jest.mock('../../../components/home/HorizontalScroller/HorizontalScroller', () => ({}))

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

jest.mock('react-native', () => ({
    View: '',
    Text: '',
    StatusBar: '',
    StyleSheet: {
        create: jest.fn(e =>e),
      },
    Dimensions: {
        get: jest.fn(e =>e)
    }
}))

jest.mock('react-native-gesture-handler', () => ({
    TouchableOpacity: ''
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

test('should render correct', () => {

    let stylist = new User("s.seif@yahoo.com", "11 Nov 2020");
    let look = new Look("Cool Look",
        "Cool",
        "Summer",
        new Date(),
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        [],
        stylist);

    const props={
        ClearSearch: jest.fn(),
        FetchLooksBySearch: jest.fn(),
        FetchRelatedLooksBySearch: jest.fn(),
        navigation: jest.fn(),
        route: {
            params:{
                type:'tag',
                tag: '#summerLook',
                search: ''
            }
        },
        search: {
            search: [look],
            noresults: false
        }
    };
    
    const wrapper = shallow(
        <NCSearchResultScreen {...props}/>
    );
    expect(wrapper).toMatchSnapshot();
});