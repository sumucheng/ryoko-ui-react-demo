
function classnames(...names: (string | undefined)[]) {
    return names.filter(i => i).join(' ')
}

export default classnames