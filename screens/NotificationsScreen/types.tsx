import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import Notification from "../../entities/Notification"
import { fetchNotifications, markAllAsRead, markAsRead, refreshNotifications } from "../../store/actions"
import { RootState } from "../../store/configureStore"

export interface componentProps {
    navigation: {
        reset: (arg0: { index: number; routes: { name: string; }[]; }) => void; navigate: (arg0: string) => void;
        goBack: () => void;
    }
}

export type State = {
    notifications: any,
    refreshing: boolean,
    loadMore: boolean,
    hasScrolled: boolean
}

export interface StateFromProps {
    notifications: {
        notifications: Notification[]
    }

}

export interface DispatchFromProps {
    FetchNotifications: () => Promise<void>,
    MarkAsRead: (id: number) => Promise<void>,
    MarkAllAsRead: () => Promise<void>,
    RefreshNotifications: () => Promise<void>,
}

export const mapStateToProps = (state: RootState) => {
    return {
        notifications: state.notifications
    }
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchFromProps => {
    return {
        FetchNotifications: () => dispatch(fetchNotifications()),
        MarkAsRead: (id: number) => dispatch(markAsRead(id)),
        MarkAllAsRead: () => dispatch(markAllAsRead()),
        RefreshNotifications: () => dispatch(refreshNotifications()),
    }
}
export type Props = StateFromProps & DispatchFromProps & componentProps
