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

    // var settings_buttons_div = document.getElementById("settings-buttons-div")
    // settings_buttons_div.addEventListener("click", function (e) {
    //     console.log(e.target)
    //     console.log(e.target.attributes['data-settings-button'].value)
    // })

    var schedule_button = document.getElementById("schedule-button")
    schedule_button.addEventListener("click", function(e) {
        show_settings_div('schedule')

        var template = document.getElementById('set-schedule-period')
        var aday_schedule_header = document.getElementById('aday-schedule-header')
    })

    var test_button = document.getElementById("test-button")
    test_button.addEventListener("click", function(e) {
        show_settings_div('test')
    })

    function show_settings_div(setting) {
        var settings_div = document.getElementById('settings-div')
        var content_divs = document.getElementsByClassName('settings-div-content')

        for (let i = 0; i < content_divs.length; i++) {
            div = content_divs[i]
            if(div.attributes['data-setting'].value == setting) {
                div.style.display = 'block'
            } else {
                div.style.display = 'none'
            }
        }
    }

})