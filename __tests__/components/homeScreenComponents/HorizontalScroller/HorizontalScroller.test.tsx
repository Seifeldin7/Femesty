import React from "react";
import { render } from "react-native-testing-library";
import { MHorizontalScroller } from "../../../../components/HomeScreenComponents";
import Look from "../../../../entities/Look";
import LookCategory from "../../../../entities/LookCategory";
import User from "../../../../entities/User";
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));
jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))
jest.mock('../../../../services/ApiClient', () => ({
    Constants: {
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
test('should render Horizontal Scroller correctly', () => {
    let stylist = new User("s.seif@yahoo.com", "11 Nov 2020", "Seifo", "SeifEldin", "../../../../assets/images/01.jpg",
        "I am a stylist", "011111111", "Mokataam");
    let look = new Look(1, "", new Date(),new Date(),"Cool Look",
        "Cool",
        new LookCategory(1,"",new Date(),new Date(),"",""),
        stylist,
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        []
        )
    let addFavorite = jest.fn();
    let deleteFavorite = jest.fn();
    let navigation = jest.fn();
    const tree = render(
        <MHorizontalScroller
            look={look}
            index={1}
            pageNumSelected={1}
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
            navigation={navigation}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
