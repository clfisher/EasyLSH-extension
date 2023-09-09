document.addEventListener("DOMContentLoaded", function () {

    var javascript_test_button = document.getElementById("grid-container")
    javascript_test_button.addEventListener("click", function (e) {
        var target = e.target
        var row = target.attributes['data-row'].value
        var column = target.attributes['data-col'].value
        alert(`${row},${column}`)
    })
})