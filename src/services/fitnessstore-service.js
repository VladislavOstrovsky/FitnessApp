
export default class FitnessstoreService {

    getProducts() {
        return [
            {   id: 1, 
                name: 'Protein',
                price: 150,
                coverImage: 'https://www.sportfood40.ru/uploads/combinations/57c671ef10ee282fbd81891cf92b2c94.jpg'  },
            {   id: 2,
                name: 'Subscription',
                price: 1500,
                coverImage: 'http://yoga.vkusicvet.com/upload/iblock/199/1992086b1a3e1145385b4d1eef98d5c9.png'
            }
        ];
    }
}