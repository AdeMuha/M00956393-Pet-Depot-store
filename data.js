var webstore = new Vue({
    el:'#app',
    data:{
        showProduct: true,
        sitename: 'Pet Depot store',
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            method: 'Home',
            gift: false,
            sendGift: 'Send as a gift',
            dontSendGift: 'Do not send as a gift',
        },
        states: {
            AL: 'Alabama',
            AR: 'Arizona',
            CA: 'California',
            NV: 'Nevada',
        },
        product:{
            id: 1001,
            title: "Cat Food, 25lb bag",
            description: "A 25 pound bag of irresistible, organic goodness for your cat.",
            price: 2000,
            image: "Cat.jpg",
            availableInventory: 10,
            rating: 3,
        },
        products: products,
        cart:[]
    },
    //Cases
    methods:{
        addToCart(product){
            this.cart.push(product.id);
        },
        showCheckout(){
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm(){
            alert('Order submitted!');
        },
        canAddToCart(product) {
            return product.availableInventory > this.cartCount(product.id);
        },
        cartCount(id){
        let count = 0;
        for(let i = 0; i < this.cart.length; i++) {
            if (this.cart[i] === id) {
                count++;
            }
        }
        return count;
    }
    },
    computed:{
        cartItemCount: function(){
            return this.cart.length || "";
        },
        canAddToCart: function() {
            return this.product.availableInventory > this.cartItemCount;
        },
        itemsLeft() {
            return this.product.availableInventory - this.cartItemCount;
        },
        sortedProducts() {
            function compare(a, b){
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
            }
            return this.products.sort(compare);
        }
    },
})