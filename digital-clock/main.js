function getTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let day = now.getDate();
    let month = now.getMonth()+1;
    // +1 verdik çünkü js ayları sıfırdan başlayarak alır
    let year = now.getFullYear();

    (hour<10)?      document.querySelector("#hour").innerText="0"+hour :
                    document.querySelector("#hour").innerText=hour;
    (minute<10)?    document.querySelector("#minute").innerText="0"+minute :
                    document.querySelector("#minute").innerText=minute;
    (second<10)?    document.querySelector("#second").innerText="0"+second :
                    document.querySelector("#second").innerText=+second;

    (month<10)?    document.querySelector("#date").innerText= day+" / 0"+month+" / "+year :
    document.querySelector("#date").innerText= day+" / "+month+" / "+year;
    
}

// setınterval da içerisinde yazılan kodu kaç saniye de bir çalışacagını ayarlarıyoruz o süre zarfında çalışıyor
setInterval(function(){
    getTime();
},1000);
