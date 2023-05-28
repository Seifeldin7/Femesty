export interface componentProps {
    isVisible: boolean,
    setIsAlertVisible?: Function,
    onCloseAlert?: Function,
    title: string,
    description: string,
    type: string,
    callableFunction: Function
}
