import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import User from "../../../entities/User";
import { NCEditProfileScreen } from "../../../screens";

jest.mock('react-native-gesture-handler');
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

test('should render edit profile screen correct', () => {

    let stylist = new User("s.seif@yahoo.com",
        "11 Nov 2020",
        "ahmed",
        "Ahmed Mohamed",
        "",
        "Famous Designer",
        "01111111",
        "Mokattam");

    const props = {
        EditProfile: jest.fn(),
        navigation: {goBack: jest.fn(), reset: jest.fn(), navigate: jest.fn()},
        profile: {
            profile: stylist,
        }
    };
    const tree = render(
        <NCEditProfileScreen
            {...props}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();

});

describe('<Edit Profile>', () => {
    let getByText: (text: string) => ReactTestInstance | null;
    let editProfile = jest.fn();
    let back = jest.fn();
    let stylist = new User("s.seif@yahoo.com",
        "11 Nov 2020",
        "ahmed",
        "Ahmed Mohamed",
        "",
        "Famous Designer",
        "01111111",
        "Mokattam");
    const props = {
        EditProfile: editProfile,
        navigation: {goBack: back, reset: jest.fn(), navigate: jest.fn()},
        profile: {
            profile: stylist,
        }
    };
    beforeEach(() => {
        ({ getByText } = render(
            <NCEditProfileScreen
            {...props}
        />
        ))
    });
    test('on Save', () => {
        const save = getByText("Save Changes");
        expect(save).toBeDefined();
        if (save) {
            fireEvent.press(save);
            expect(editProfile).toHaveBeenCalledTimes(1);
            expect(back).toHaveBeenCalledTimes(1);
        }
        
    });

});
