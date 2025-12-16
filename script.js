function ac(id){
  document.querySelectorAll('.panel').forEach(p=>p.style.display="none");
  document.getElementById(id).style.display="block";
}
ac('yas');

// YAŞ
function yasHesapla(){
  let y=yil.value;
  yasSonuc.innerText="Yaşınız: "+(new Date().getFullYear()-y);
}

// NOT
function notHesapla(){
  let o=(+n1.value + +n2.value + +n3.value)/3;
  notSonuc.innerText="Ortalama: "+o.toFixed(2);
}

// HAVA
async function havaGetir(){
  let s=sehir.value;
  let g=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${s}&count=1`);
  let j=await g.json();
  if(!j.results){havaSonuc.innerText="Şehir bulunamadı";return;}
  let {latitude,longitude}=j.results[0];
  let w=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
  let d=await w.json();
  havaSonuc.innerText=`🌡️ ${d.current_weather.temperature}°C | 💨 ${d.current_weather.windspeed} km/h`;
}

// SORU KUTUSU
function soruGonder(){
  let ad=isim.value;
  let m=mesaj.value;
  if(!ad||!m)return;
  sorular.innerHTML += `<p><b>${ad}:</b> ${m}</p>`;
  mesaj.value="";
}
