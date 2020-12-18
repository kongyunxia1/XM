export default {
    //修改state的state中的状态
    addCounter(state, payload) {
        payload.count++
    },
    addToCart(state, payload) {
        payload.check = true,
            state.cartList.push(payload)
    },


}