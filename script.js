window.onload = function () {
    if (hljs) {
        hljs.highlightAll();
    }

    document.getElementById("footer_year").innerHTML = new Date(Date.now()).getFullYear() +1;
};