

export const ProductsReducers = (state = [], action) => {
    switch (action.type) {


        case 'addProduct':

            return action.payload;

        case 'deleteProduct':

            return [...state.filter((i) => i.id !== action.payload)]

        case 'updateProduct':

            return state.map((i) => {
                if (i.id === action.payload.id) {
                    console.log('se verifica')
                    return {
                        ...i,
                        cantidades: action.payload.cantidades,
                    }
                }
                return i;
            })



        default:
            return state;

    }
}
