import React from "react";
import { render } from "react-native-testing-library";
import { MemoLookMedia } from "../../../../components/HomeScreenComponents";
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
test('should render lookMedia correctly', () => {
    const tree = render(
        <MemoLookMedia
            image={"../../../../assets/images/01.jpg"}
            poster={"../../../../assets/images/01.jpg"}
            navigation= {jest.fn()}
            username={"pretty"}
            description={"Cool Look"}
            title={"Egyptian Look"}
            dots={[]}
            firstMedia={true}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
