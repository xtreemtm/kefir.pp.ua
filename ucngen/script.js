const setcap = (tx) => {
    document.getElementById("scorecap").innerHTML = tx;
};
const playhs = (score) => {
    document.getElementById("hsmus").play();
    setInterval(() => {
        document.getElementById('newrec').style.visibility = "hidden";
    }, 250)
    setTimeout(()=>{
        setInterval(() => {
            document.getElementById('newrec').style.visibility = "visible";
        }, 250)
    }, 125)
    let sc = 0;
    setInterval(()=>{
        document.getElementById("score").innerHTML = sc;
        sc += 10;
        if (sc <= 2000) {
            setcap("GREAT JOB!")
        } else if (sc <= 4000) {
            setcap("FANTASTIC!");
        } else if (sc <= 6000) {
            setcap("AMAZING!");
        } else if (sc <= 8000) {
            setcap("STUPENDOUS!");
        } else if (sc <= 10000) {
            setcap("PERFECT!");
        } else if (sc <= 15000) {
            setcap("UNBELIAVABLE!");
        } else if (sc <= 18000) {
            setcap("BROKEN!");
        } else if (sc <= 25000) {
            setcap("UNBELIAVABLE!");
        }
    }, 50);
}

const b3 = () => {
    const btn = document.getElementsByClassName("btn")[0];
    btn.innerHTML = "Завантаження...";
    setTimeout(()=>{
        document.getElementById("overlay").style.display = "none";
        playhs();
    }, 1000)
}