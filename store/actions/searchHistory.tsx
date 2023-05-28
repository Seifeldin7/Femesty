import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Dialog from '../../components/ThemeComponents/Dialog';
import { SearchHistory, User } from '../../config/Routes'
import { ApiClient } from '../../services';
export const GET_SEARCHHISTORY = 'GET_SEARCHHISTORY';
export const LOADING = 'LOADING';
export const UPDATE_SEARCHHISTORY = 'UPDATE_SEARCHHISTORY';

export const getSearchHistory = () => (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return async () => {
        try {
                dispatch({
                    type: LOADING, loading: true
                });
                const user = await ApiClient.getRequest(User.getUser);
                const id= user?.result.user.id;
                const result = await ApiClient.getRequest(SearchHistory.get_searchHistory+id);
                const history = result?.result;
                if (result) {
                    dispatch({
                        type: GET_SEARCHHISTORY, history: history
                    });
                    dispatch({
                        type: LOADING, loading: false
                    });
                }
        } catch (err) {
            Dialog.fail(`Cannot Fetch search history from the server, try again later`);
        }
    };
};


export const updateSearchHistory = (description:string) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        try {
            console.log("updateSearchHistory");
                dispatch({
                    type: LOADING, loading: true
                });

                const user = await ApiClient.getRequest(User.getUser);

                const response = await ApiClient.postRequest(SearchHistory.update_searchHistory,
                    {id: user?.result.user.id,description:description});

                  if (response?.status == 200) {
                      console.log("DB updated");
                  }else{
                      console.log(response?.status+" in post");
                  }

                dispatch({
                    type: UPDATE_SEARCHHISTORY, description:description
                });

                dispatch({
                    type: LOADING, loading: false
                });

        } catch (err) {
            Dialog.fail(`Cannot update search history `);
        }
    };
};
