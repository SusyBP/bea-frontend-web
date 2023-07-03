const API = "https://api.github.com/users/";


const app = Vue.createApp(
    {
        data(){ 
            return {
                
                // search: null,
                cardDetails: ["Saab", "Volvo", "BMW"]
                // result: null,
                // error:null,
                // favorites: new Map()
            };
        },        
        created(){
            // let savedFavorites = JSON.parse(window.localStorage.getItem('favorites'))
            // if (savedFavorites!=null && savedFavorites.length) {
            //     const favorites = new Map(savedFavorites.map(favorite => [favorite.id, favorite]))
            //     this.favorites = favorites
            // }
        },
        methods:{
                        
            // async doSearch() {
            //     this.result = this.error = null
            //     try {
            //         const response = await fetch(API + this.search)
            //         if(!response.ok)
            //             {throw new Error("User not found")}
    
            //         const data = await response.json()
            //         this.result=data
            //         console.log(data)
                    
            //     } catch (error) {
            //         this.error = error

            //     }
            //     finally
            //     {
            //         this.search = null
            //     }
                
            // },
            // addFavorite(){
            //     this.favorites.set(this.result.id, this.result)
            //     updateFavorites()
            // },
            // deleteFavorite(){
            //     this.favorites.delete(this.result.id)
            //     updateFavorites()
            // },
            // showFavorite(favorite){
            //     this.result = favorite
            // },
            // checkFavorite(){
            //     return this.result?.login === id;
            // }
        },
        computed:{
            // isFavorite(){
            //     return this.favorites.has(this.result.id)
            // },
            // allFavorites(){
            //     return Array.from(this.favorites.values())
            // },
            // updateFavorites()
            // {
            //     window.localStorage.setItem('favorites', JSON.stringify(this.allFavorites))
            // }
        }
    }
) 