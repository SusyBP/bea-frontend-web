app.component('app-navbar', {
    template:
    /*html */ `
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="#">BEA</a>
  
    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Inventory</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Expenses</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Income</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Reports</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Accounting</a>
  </li>
      </ul>
    </div>
  </nav> 
`
})

