import React, { useState, MouseEventHandler } from 'react'
import Dialog, { alert, confirm } from './dialog'
import Button from '../button/button'
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
        <Button onClick={handleCancel}>取 消</Button>,
        <Button onClick={handleConfirm}>确 认</Button>
    ]
    return (
        <div>
            <div className="item">
                <Button onClick={() => setVisible(true)}>click me</Button>
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
                <Button onClick={() => alert({
                    title: '确认删除',
                    content: '您确定要删除该标签吗？删除后现有的推荐列表页将清空。',
                    onConfirm: () => { console.log('知道了') },
                })}>click</Button>
            </div>
            <div className="item">
                <Button onClick={() => confirm({
                    title: '确认删除',
                    content: '您确定要删除该标签吗？删除后现有的推荐列表页将清空。',
                    onConfirm: () => { console.log('确认') },
                    onCancel: () => { console.log('取消') }
                })}>click</Button>
            </div>
        </div>

    )
}