export default {
    historys(state) {
        // 复习数组去重
        return state.searchHistory.filter((item, index, arr) => {
            return arr.indexOf(item) == index
        })
    }
}