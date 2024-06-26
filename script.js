const val = document.getElementById('tp')
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        val.classList.remove("hidden")
    }
    else {
        val.classList.add("hidden")
    }
});

