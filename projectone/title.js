let alertShow = false;
setInterval(() => {
    document.title = 
    alertShow ? "Lets Play Rock Paper Scissors"
            : "What are you waiting for!";
    alertShow = !alertShow;
}, 1000);
