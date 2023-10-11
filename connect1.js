let connect=document.getElementById("five");

let connectOnline=()=>{
    connect.textContent="Internet connected";
};
let connectOffline=()=>
{
    connect.textContent="No Internet";
};



if(window.navigator.onLine){
    connectOnline();
}
else{
    connectOffline();
}
window.addEventListener("online",connectOnline);
window.addEventListener("offline",connectOffline);