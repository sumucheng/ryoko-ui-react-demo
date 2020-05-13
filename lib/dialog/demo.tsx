import React, { useState } from 'react'
import Dialog, { alert } from './dialog'
import Button from 'lib/button'

export default function () {
    const [visible, setVisible] = useState(false)
    const buttons = [
        <button onClick={() => setVisible(false)}>取消</button>,
        <button onClick={() => setVisible(false)}>确认</button>
    ]
    return (
        <div>
            <div className="item">
                <button onClick={() => setVisible(true)}>click me</button>
                <Dialog
                    visible={visible}
                    title="提示"
                    buttons={buttons}
                    closeDialog={() => setVisible(false)}
                >
                    您确定要删除该标签吗？删除后现有的推荐列表页将清空。
                </Dialog>
            </div>
            <div className="item">
                <button onClick={() => alert({
                    title: '确认删除',
                    content: '您确定要删除该标签吗？删除后现有的推荐列表页将清空。',
                    onCancel: () => { },
                    onConfirm: () => { },
                })}>click</button>
            </div>
        </div>

    )
}