import React, { Fragment, MouseEventHandler, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import './dialog.scss'
import Icon from '../icon/icon'
import Button from '../button/button'
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
                {props.title && <div className="r-dialog-header">{props.title}</div>}
                {props.showClose &&
                    <div className="r-dialog-close" onClick={e => props.closeDialog(e)}>
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
    return ReactDOM.createPortal(props.visible && dialog, document.body)

}
Dialog.defaultProps = {
    title: '',
    buttons: [],
    showClose: true,
    closeOnClickMask: true,
}
interface ModalProps {
    title?: string;
    buttons?: Array<ReactElement>;
    content: string;
    showClose?: boolean
}
const modal = (props: ModalProps) => {
    const component =
        <Dialog
            visible={true}
            title={props.title}
            showClose={props.showClose}
            buttons={props.buttons}
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
    return closeDialog
}

interface AlertOrConfirmProps {
    title?: string;
    content: string;
    onConfirm?: React.MouseEventHandler;
    onCancel?: React.MouseEventHandler;
}

const alert = (props: AlertOrConfirmProps) => {
    const buttons = [
        <Button onClick={e => {
            closeDialog()
            props.onConfirm && props.onConfirm(e)
        }}>知道了</Button>
    ]
    const closeDialog = modal({
        buttons,
        content: props.content,
        title: props.title,
        showClose: false
    });
}
const confirm = (props: AlertOrConfirmProps) => {
    const buttons = [
        <Button onClick={e => {
            closeDialog()
            props.onCancel && props.onCancel(e)
        }}>取 消</Button>,
        <Button onClick={e => {
            closeDialog()
            props.onConfirm && props.onConfirm(e)
        }}>确 认</Button>
    ]
    const closeDialog = modal({
        buttons,
        content: props.content,
        title: props.title
    });
}
export { alert, confirm }
export default Dialog