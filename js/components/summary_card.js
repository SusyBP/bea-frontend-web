app.component('summary-card',{
  props:{title: {type: String, required: true},
  amount: {type: String, required: true}},
    template: 
    /*html*/ `
    <div class="summary-card text-left">
     <span class="icon fa fa-money my-1"></span>
      <div class="summary-card-body">
      <p class="summary-card-title">{{ title }}</p>
        <h5 class="summary-card-text">{{ amount }}</h5>     
      </div>
    </div>
    `
})