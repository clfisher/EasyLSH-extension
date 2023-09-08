document.addEventListener("DOMContentLoaded", function () {

    var javascript_test_button = document.getElementById("javascript_test")
    javascript_test_button.addEventListener("click", function () {
        alert("Button clicked!")
        localStorage.setItem("test", 3)
    })
    
})