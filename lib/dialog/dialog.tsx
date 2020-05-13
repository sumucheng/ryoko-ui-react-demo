import React, { Fragment, MouseEventHandler, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import './dialog.scss'
import '../index.scss'
import Icon from '../icon/icon'
interface DialogProps {
    visible: boolean;
    title?: string;
    buttons?: Array<ReactElement>;
    showClose?: boolean;
    closeOnClickMask?: boolean;
    closeDialog: React.MouseEventHandler;
}
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const handleClickMask: MouseEventHandler = e => {
        if (props.closeOnClickMask) props.closeDialog(e)
    }
    const dialog =
        <Fragment>
            <div className="r-dialog-mask" onClick={handleClickMask}></div>
            <div className="r-dialog">
                {props.title &&
                    <div className="r-dialog-header">{props.title}</div>}
                {props.showClose &&
                    <div className="r-dialog-close" onClick={props.closeDialog}>
                        <Icon name="close" />
                    </div>
                }
                <div className="r-dialog-content">
                    {props.children}
                </div>
                {props.buttons && props.buttons.length > 0 &&
                    <div className="r-dialog-footer">
                        {props.buttons.map((button, index) =>
                            React.cloneElement(button, { key: index }))
                        }
                    </div>}
            </div>
        </Fragment>
    return (
        ReactDOM.createPortal(props.visible && dialog, document.body)
    )
}
Dialog.defaultProps = {
    title: '',
    buttons: [],
    showClose: true,
    closeOnClickMask: true,
}
interface AlertProps {
    title?: string;
    content: string;
    onConfirm?: Function;
}
const alert = (props: AlertProps) => {
    const component =
        <Dialog
            visible={true}
            showClose={false}
            buttons={[
                <button onClick={() => {
                    closeDialog()
                    props.onConfirm && props.onConfirm()
                }}>知道了</button>
            ]}
            closeDialog={() => { closeDialog() }}>
            {props.content}
        </Dialog>
    const div = document.createElement('div')
    const closeDialog = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    document.body.append(div)
    ReactDOM.render(component, div)
}

export { alert }
export default Dialog