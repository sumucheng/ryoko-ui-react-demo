import React, { useState, MouseEventHandler } from 'react'
import Dialog, { alert, confirm } from './dialog'
import Button from 'lib/button'

export default function () {
    const [visible, setVisible] = useState(false)
    const handleCancel: MouseEventHandler = e => {
        console.log('取消')
        console.log(e)
        setVisible(false)
    }
    const handleConfirm: MouseEventHandler = e => {
        console.log('确认')
        console.log(e)
        setVisible(false)
    }
    const buttons = [
        <button onClick={handleCancel}>取消</button>,
        <button onClick={handleConfirm}>确认</button>
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
                    onConfirm: () => { console.log('知道了') },
                })}>click</button>
            </div>
            <div className="item">
                <button onClick={() => confirm({
                    title: '确认删除',
                    content: '您确定要删除该标签吗？删除后现有的推荐列表页将清空。',
                    onConfirm: () => { console.log('确认') },
                    onCancel: () => { console.log('取消') }
                })}>click</button>
            </div>
        </div>

    )
}