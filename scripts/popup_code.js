document.addEventListener("DOMContentLoaded", function () {

    // var grid_container = document.getElementById("grid-container")
    // grid_container.addEventListener("click", function (e) {
    //     var target = e.target
    //     var row = target.attributes['data-row'].value
    //     var column = target.attributes['data-col'].value
    //     alert(`${row},${column}`)
    // })

    // var javascript_test_button = document.getElementById("javascript_test")
    // javascript_test_button.addEventListener("click", function () {
    //     alert("Button clicked!")
    //     localStorage.setItem("test", 3)
    // })

    var settings_buttons_div = document.getElementById("settings-buttons-div")
    settings_buttons_div.addEventListener("click", function (e) {
        console.log(e.target)
        console.log(e.target.attributes['data-settings-button'].value)
    })
})