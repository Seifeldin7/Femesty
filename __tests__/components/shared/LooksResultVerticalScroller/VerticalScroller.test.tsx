import React from "react";
import { render } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import { LooksResultVerticalScroller } from "../../../../components/SharedComponents/LooksResultVerticalScroller";
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

test('Should render vertical scroller correctly', () => {
    let stylist = new User("s.seif@yahoo.com", "11 Nov 2020", "Seifo", "SeifEldin", "../../../../assets/images/01.jpg",
        "I am a stylist", "011111111", "Mokataam");
    let look = new Look(1, "", new Date(), new Date(), "Cool Look",
        "Cool",
        new LookCategory(1, "", new Date(), new Date(), "", ""),
        stylist,
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        []
    )
    look = { ...look, id: 1 };
    let looks = [look];
    let getLooks = jest.fn().mockReturnValue(new Promise(() => look));
    let refreshLooks = jest.fn();
    let addFavorite = jest.fn();
    let deleteFavorite = jest.fn();
    const tree = render(
        <LooksResultVerticalScroller
            data={looks}
            getNextLook={getLooks}
            refreshLooks={refreshLooks}
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
            navigation={jest.fn()}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('<Vertical Scroller>', () => {
    let getByTestId: (testID: string) => ReactTestInstance | null;
    let getAllByTestId: (testID: string) => ReactTestInstance[];
    let stylist = new User("s.seif@yahoo.com", "11 Nov 2020", "Seifo", "SeifEldin", "../../../../assets/images/01.jpg",
        "I am a stylist", "011111111", "Mokataam");
    let look = new Look(1, "", new Date(), new Date(), "Cool Look",
        "Cool",
        new LookCategory(1, "", new Date(), new Date(), "", ""),
        stylist,
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        "../../../../assets/images/01.jpg",
        []
    )
    look = { ...look, id: 1 };
    let getLooks: Function;
    let refreshLooks: Function;
    let addFavorite = jest.fn();
    let deleteFavorite = jest.fn();
    beforeEach(() => {
        let looks = [look];
        getLooks = jest.fn().mockImplementation(() => {
            let newlook: Look = { ...look, id: 2 };
            return new Promise((r) => setTimeout(() => {
                looks.push(newlook);
            }, 0));
        });
        refreshLooks = jest.fn();
        ({ getByTestId, getAllByTestId } = render(
            <LooksResultVerticalScroller
                data={looks}
                getNextLook={getLooks}
                refreshLooks={refreshLooks}
                addFavorite={addFavorite}
                deleteFavorite={deleteFavorite}
                navigation={jest.fn()}
            />
        ))
    });

    test('Should render looks media list', () => {
        const looksList = getByTestId('looksList');
        expect(looksList).toBeDefined();
        const Vsloading = getByTestId('Vsloading');
        expect(Vsloading).toBeDefined();

    })
    test('Should start with one look', () => {
        const horizontalScrollers = getAllByTestId('horizontalScroller');
        expect(horizontalScrollers.length).toBe(1);
    })
    test('Should call get looks two times', () => {
        expect(getLooks).toHaveBeenCalledTimes(2);
    })
})