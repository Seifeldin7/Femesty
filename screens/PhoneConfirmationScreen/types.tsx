import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { } from "../../store/actions"
import { RootState } from "../../store/configureStore"

export interface componentProps {
    navigation: any,
    route: any
}

export type State = {
}

export interface StateFromProps {
}

export interface DispatchFromProps {

}

export const mapStateToProps = (state: RootState) => {
    return {
    }
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchFromProps => {
    return {
    }
}
export type Props = StateFromProps & DispatchFromProps & componentProps
