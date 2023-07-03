app.component('chart-card', {
    template: /* html */`
<div class="summary-card text-left">
    <p class="chart-card-title">Monthly Income</p>
    <div class="divider"></div>
    <div class="p-4">
        <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
    </div>
</div>
`})