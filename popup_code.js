document.addEventListener("DOMContentLoaded", function () {

    var grid_container = document.getElementById("grid-container")
    grid_container.addEventListener("click", function (e) {
        var target = e.target
        var row = target.attributes['data-row'].value
        var column = target.attributes['data-col'].value
        alert(`${row},${column}`)
    })
})