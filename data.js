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
            availableInventory: 5,
        },
        cart:[]
    },
    //Cases
    methods:{
        addToCart: function(){
            this.cart.push(this.product.id);
        },
        showCheckout(){
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm(){
            alert('Order submitted!');
        },
    },
    computed:{
        cartItemCount: function(){
            return this.cart.length || "";
        },
        canAddToCart: function() {
            return this.product.availableInventory > this.cartItemCount;
        }
    }
})