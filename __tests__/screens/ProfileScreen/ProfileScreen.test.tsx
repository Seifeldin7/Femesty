import React from "react";
import { render } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import User from "../../../entities/User";
import { NCProfileScreen } from "../../../screens";


jest.mock('../../../../services/ApiClient', () => ({
    constants: {
        manifest: {
            developer: {
                projectRoot: '/home/test/project',
            },
            logUrl: 'https://localhost:19001/logs',
            extra: {
                baseUrl: '192.168.1.1'
            }
        }
    },
}));

test('should render my profile correctly', () => {

    let stylist = new User("s.seif@yahoo.com",
        "11 Nov 2020",
        "ahmed",
        "Ahmed Mohamed",
        "",
        "Famous Designer",
        "01111111",
        "Mokattam");

    const props = {
        LogOut: jest.fn(),
        navigation: {goBack: jest.fn(), reset: jest.fn(), navigate: jest.fn()},
        profile: {
            profile: stylist,
        }
    };

    const tree = render(
        <NCProfileScreen
            {...props}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();

});

describe('<My Profile with data>', () => {
    let getByText: (text: string) => ReactTestInstance | null;
    let stylist = new User("s.seif@yahoo.com",
        "11 Nov 2020",
        "ahmed",
        "Ahmed Mohamed",
        "",
        "Famous Designer",
        "01111111",
        "Mokattam");
    const props = {
        LogOut: jest.fn(),
        navigation: {goBack: jest.fn(), reset: jest.fn(), navigate: jest.fn()},
        profile: {
            profile: stylist,
        }
    };
    beforeEach(() => {
        ({ getByText } = render(
            <NCProfileScreen
            {...props}
        />
        ))
    });
    test('username is printed on screen', () => {
        const username = getByText(stylist.username);
        expect(username).toBeDefined();
    });
    test('name is printed on screen', () => {
        const name = getByText(stylist.name);
        expect(name).toBeDefined();
    });
});

describe('<My Profile without data>', () => {
    let getByText: (text: string) => ReactTestInstance | null;
    let stylist = new User("s.seif@yahoo.com",
        "11 Nov 2020",
        "",
        "",
        "",
        "Famous Designer",
        "01111111",
        "Mokattam");
    const props = {
        LogOut: jest.fn(),
        navigation: {goBack: jest.fn(), reset: jest.fn(), navigate: jest.fn()},
        profile: {
            profile: stylist,
        }
    };
    beforeEach(() => {
        ({ getByText } = render(
            <NCProfileScreen
            {...props}
        />
        ))
    });
    test('@username is printed on screen when there is no username', () => {
        const username = getByText("@username");
        expect(username).toBeDefined();
    });
    test('@name is printed on screen when there is no name', () => {
        const name = getByText("@name");
        expect(name).toBeDefined();
    });
});
