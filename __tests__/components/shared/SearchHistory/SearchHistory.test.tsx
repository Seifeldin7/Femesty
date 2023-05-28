import React from "react";
import { render } from "react-native-testing-library";
import { SearchHistoryScroller } from "../../../../components/SearchHistoryScreenComponents";
import {View} from "react-native";

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

jest.mock('react-native-gesture-handler', () => ({
    TouchableOpacity: '',
    FlatList: ''
}))


test('should render history', () => {
    let onpress = jest.fn();
    let history=['look','summer'];
    const tree = render(
        <View>
            <SearchHistoryScroller
            history={history} onpress={(item:any)=>{onpress}}
            />
        </View>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});