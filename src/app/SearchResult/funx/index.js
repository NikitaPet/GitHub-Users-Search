export const sortByID = (items, ascending, sortingMode) => {
    const sortShift = ascending ? 1 : -1
    items.sort(function (a, b) {
        const aID = a[sortingMode]
        const bID = b[sortingMode]
        if (aID > bID) return sortShift
        if (aID < bID) return -1 * sortShift
        return 0
    })
    return items
}
