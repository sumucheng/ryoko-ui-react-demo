import React, { Fragment } from 'react'
import './dialog.scss'
import '../index.scss'
import Icon from '../icon/icon'
interface IconProps extends React.SVGAttributes<SVGElement> {
    visible: boolean;
}
const Dialog: React.FunctionComponent<IconProps> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className="r-dialog-mask"></div>
                <div className="r-dialog">
                    <div className="r-dialog-header"></div>
                    <div className="r-dialog-close"><Icon name="close" /></div>
                    <div className="r-dialog-content">
                        {props.children}
                    </div>
                    <div className="r-dialog-footer"></div>
                </div>
            </Fragment>
            : null
    )
}
export default Dialog