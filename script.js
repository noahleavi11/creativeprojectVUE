var app = new Vue({
    el:"#app",
    data: {
        current_items: {},
        num_items: '',
        show: 'all',
    },
    created() {
        this.fortniteItems();
    },
    methods: {
        async fortniteItems() {
            try{
                this.loading = true;
        
                const response = await axios.get('https://fortnite-api.theapinetwork.com/items/list', {
                    headers: {
                        Authorization: 'cf6b69cf7db6aa0d89df960120932be6'
                    }
                });
                console.log(response);
                this.current_items = response.data.data;
            } catch(error){
                console.log(error)
              }
        },
        showRare(){
            this.show = 'rare';
        },
        showMarvel(){
            this.show = 'marvel';
        },
        showEpic(){
            this.show = 'epic';
        },
        showLegendary() {
            this.show = 'legendary';
        },
        showMythic(){
            this.show = 'mythic';
        },
        showTranscendant() {
            this.show = 'transcendant';
        }
    },
    computed: {
        filteredItems() {
            if(this.show == 'epic')
            return this.current_items.filter(item => {
                console.log(item.item.rarity == 'epic')
                return item.item.rarity == 'epic';
            });
            if(this.show == 'rare')
            return this.current_items.filter(item => {
                console.log(item.item.rarity == 'rare')
                return item.item.rarity == 'rare';
            });
            if(this.show == 'marvel')
            return this.current_items.filter(item => {
                console.log(item.item.rarity == 'marvel')
                return item.item.rarity == 'marvel';
            });
            if(this.show == 'legendary')
            return this.current_items.filter(item => {
                console.log(item.item.rarity == 'legendary')
                return item.item.rarity == 'legendary';
            });
            if(this.show == 'mythic')
            return this.current_items.filter(item => {
                console.log(item.item.rarity == 'mythic')
                return item.item.rarity == 'mythic';
            });
            if(this.show == 'transcendent')
            return this.current_items.filter(item => {
                console.log(item.item.rarity == 'transcendent')
                return item.item.rarity == 'transcendent';
            });

            return this.current_items;
        }

    }
})