export default {
    addCart(context, payload) {
        //payload新增的商品，对比id
        let oldProduct = null
        for (let item of context.state.cartList) {
            if (item.lid === payload.lid) {
                oldProduct = item
            }
        }
        if (oldProduct) {
            //oldProduct.count += 1
            context.commit('addCounter', oldProduct)
        } else {
            payload.count = 1
            //  context.state.cartList.push(payload)
            context.commit('addToCart', payload)

        }


    },
    deleteCart(context, payload) {
        //state.cartList.splice(payload)
        for (let item of context.state.cartList) {
            if (item.lid === payload) {
                let index = context.state.cartList.indexOf(item)
                // console.log(index)
                context.state.cartList.splice(index, 1)
            }
        }

    }

}