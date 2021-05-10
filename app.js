// function myFunction1(){
//     let userName = document.getElementById('textInput').value;
//     let userPass = document.getElementById('passInput').value;
//     if(userName === 'giorgi' && userPass === 'gio'){
//         document.getElementById('animation').style.display = 'block';
//         document.getElementById('spin').style.display = 'block';
//         document.getElementById('spin').style.animation = 'anim 4s linear';
//     } else {
//         alert('Wrong');
//     }
// } //animacia


let firstAlert = document.querySelector("html");

firstAlert.onload = function startAlert() {
    setUserName()
}//gaxsnisas an gadatvirtvisasa sul amoagdebs alerts, amistvis onload-s viyeneb

let myButton = document.getElementById('changeButton');
let myHeading = document.getElementById('choose');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        sessionStorage.setItem('name', myName);//sessionStorage- aris brauzeris shidfa mexsiereba da setItem-it iq inaxav mnishvnelobas//sessionStorage-shi name paremetrs mivaniche myName mnishvneloba
        myHeading.textContent = 'Choose the Homework, ' + myName;//textContent-it kontents vanicheb, anu ra gamoitanos am tegshi imas vuwer
    }
    sessionStorage.setItem('name', myName);
    myHeading.textContent = 'Choose the Homework, ' + myName;
}

if(!sessionStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = sessionStorage.getItem('name');
    myHeading.textContent = 'Choose the Homework, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}//saxelis chaweris prompt-ia

function printName(user){
    if(user.isLoggedIn){
        return user.firstname + ' ' + user.lastname;
    }
    return false;
}
console.log(printName(user))// asec Seidzleba

function myFunction(){
    let homeW = document.getElementById('homeworkOption').value;
    if (homeW === 'homeWork1'){
        document.getElementById('homework11').style.display = 'block';
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if (homeW === 'homeWork2'){
        document.getElementById('homework2').style.display = 'block';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork3'){
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'block';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    }else if(homeW === 'homeWork4'){
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'block';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    }else if(homeW === 'homeWork5'){
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'block';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if (homeW === 'nothing'){
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    }
}

function clickChange(){
    let homeW = document.getElementById('homeworkOption').value;
    if (homeW === 'homeWork1'){
        document.getElementById('result1').style.display = 'block';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork2'){
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'block';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork3'){
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'block';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork4'){
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'block';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork5'){
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'block';
    }
}

// davalebebi N1:
// დავალება 1

// let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
//
// for (let x = 0; x < arr.length; x++){
//     if(arr[x].length>=5){
//         console.log(arr[x]) } }//es mqonda me

// let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
//
// for (let x = 0; x<arr.length; x++){
//     const item = arr[x];
//     if(item.length>=5){
//         continue
//     }
//     console.log(item)
// }//es aris ufro swori


//
// //დავალება 2
//
// let arr2 = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];
//
// for (let x = 0; x<arr.length; x++){
//     if(arr[x]>0){
//         console.log(arr2[x])
//     }
// }
//
// //დავალება 3
// let arr3 = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
//
// for (let x in arr3){
//     for(let y in arr3[x]){
//         if(arr3[x][y]>0){
//             console.log(arr3[x][y])
//         }
//     }
// }

//დავალება 4
// let arr4 = [1, 15, 6, "giorgi", 70, 30, 809, 25];
//
// function getMax(numbers){
//     let max = 0
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i]> max){
//             max = numbers[i];
//         }
//     }
//     return max;
// }
// console.log(getMax(arr4));//swori gadawyveta aris es

// let arr4 = [1, 15, 6, "giorgi", 70, 30, 25];
//
// let getMaximum = function (arr){
//     arr.sort(function (a,b){
//         return a-b;
//     })
//     console.log(arr[arr.length - 1]);
// }
//
// getMaximum(arr4);//esec swori gadawyvetaa


// function getMax(x){
//     console.log(Math.max(..x));
// }
// getMax([1,15,6,70,30,25]); ar imuSava


/* let arr4 = [1, 15, 6, 70, 30, 25];
 // console.log(Math.max(...arr4));*//*es arasworia, radgan cifrebze muSaobs math*/

//დავალება 5

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isLoggedIn: true
// }
//
// function printName(x){
//     if(x.isLoggedIn === true){
//         console.log(x.firstname + ' ' + x.lastname)
//     }else {
//         console.log('false')
//     }
// }
// printName(user)

// let x = 0;
// let button = document.querySelector("button")
//
// button.onclick = function (){
//     document.querySelector("p").innerHTML = x++;
// }//mtvleli
//
// let clear = document.getElementById('clear');
// let show = document.querySelector('h1');
// clear.onclick = function (){
//     let container = [x];
//     sessionStorage.setItem('x', container);
//     show.textContent = container;
//     document.querySelector("p").innerHTML = x = null;
// }//mtvleli wamshleli gilakit
//
// let timer = new Date("00, 00:00:00:00").getTime();
//
// let y = setInterval(function (){
//     let startTimer = timer+1;
//     let days = Math.floor(startTimer / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((startTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((startTimer % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((startTimer % (1000 * 60)) / 1000);
//     document.querySelector('h2').innerHTML = days + "d " + hours + "h "
//         + minutes + "m " + seconds + "s ";
// },1000);

// let x = [1, 2, 3, 4];
// let y = 0;//Semgrovebeli cvladi unda Sevqmna
// for (let i in x){
//     y += x[i];//ase Sevkreb x-is elementebs
//     // console.log(x[i] + x[i]);//TiToeuli elementi gavamravle orze, anu sakuTari Tavi davumate da ise davbechde
// }
// console.log(y);//dabechdavs jams


// let source = document.getElementById('pic');
//
// function carChanger (){
//     let source1 = source.getAttribute('src');
//     if (source1 === '10best-cars-group-cropped-1542126037.jpg'){
//        source.setAttribute('src', '2022-chevrolet-corvette-z06-1607016574.jpg');
//     }else if(source1 === '2022-chevrolet-corvette-z06-1607016574.jpg') {
//         source.setAttribute('src', 'Screenshot-2020-05-12-at-15.10.34.png');
//     }else {
//         source.setAttribute('src', '10best-cars-group-cropped-1542126037.jpg');
//     }
// }// Cermi gakeTebuli daklikebadi karuseli, fotoebis mcvleli.


//leqcia 3
//funqciis deklaracia qvia aset nawers:
//function test(){}
//xolo funqciis expression qvia asets:
//let test = function(){}//rodesac cvladad vaqcev funqcias, gansxvaveba isaa, rom deklracia shemiZlia jer gamoviZaxo
//da shemdeg davwero funqcia, xolo expression-is shemtxvevashi jer funqcias vwer da mere viZaxeb
//arsebobs errow funqciebi, rommlebic gamosaxulebis gamo iwodeba arrow-t, ase gamoisaxeba:
//let test = (a, b) => {}; shignit shegvizlia function sirtyva ar gamoviyenot.
//
//
//funqciashi sheiZleba ramdenime parametri mqondes gawerili da Tan romdeniime matgans defoltad mivanicho mnishvneloba. mag:
//let test = function test (a, b) {
// return a + b;}
//let result = test (1, 3)//aq a da b parametrebi ganvsazgvre qvemot, anu bolos shemovitane, magram shemedzlo mxolod a shemometana da b-ze tavidanve gamewere mnishvneloba:
//let test = function test (a, b = 3) {
// return a + b;}
//let result = test (1);//ase b-s tavidanve mivaniche mnishvneloba.
//
//
//rodesac expression funqciashi mxolod erti martivi piroba gvaqvs magalitad return, anu aseti martivi funqcia tu gvaqvs:
// let test = (a, b)=>{
// return a+b;
// };
// let result = test(1, 3);
// shegviZlia aseti gamosaxulebiT chavwerot:
//let test = (a, b) => a + b;//anu figuruli frCxilebi ar gamoviyenoT
//rodesac ertze meti moqmedebaa funqciaSi masin frCxilebis gamoyeneba mogviwevs.
//rom shevajamot:
//function test (a, b) {
// return a + b;}
//
//let test = function test (a, b) {
// return a + b;}
//
// let test = (a, b) => a + b;
// es samive funqcia aris ertidaigive, ubralod pirveli dawerrilia function declaration, meore function expression, mesame aris mokle
//chanaweri.
//rekomentebuli ar aris funqcias Zalian bevri parametri gaeweros, jobs, rom ramdenime funqcia shevqmnat vidre bevri parametri gavwero.
//
//
//sheidzleba winaswar ar vicodet funqciis parametrebis raodenoba, anu ragac cvladi parametrebi sheidzleba gvqondes
//magalitad:
//let test = function test () {
// }
//test ('giorgi', 'naniko','marina')//anu test funqciashi tavidan ar maaqvs gansazRrvuli parametrebi da boloshi gadaveci ramenime
//aset dros arsebobs funqciis shida cvladi arguments, romelic mimartavs yvela parametrs rac ki funqcias gadaecema
//magalitad, Tu shven am funqciashi davlogavt arguments ase:
//let test = function test () {
// console. log(arguments);
// }
//test ('giorgi', 'naniko','marina')//es dabechdavs obieqtisa da masivis nazav rames, sadac parametrebis indeqsebsac da mat mnishvnelobasac gamoians anu:
//[arguments] {'0':'giorgi','1':'naniko','2':'marina'} aset rames dabechdavs da am arguments shegvidzlia moveqcet rogorc masivs, anu gamoviZaxot indeqsebi,
//gamoviyenot slaisebi pushebi da ase shemdeg, ase magalitad, Tu gvinda pirveli parametris dabechdva da ar vicit pirveli ra iqneba winaswar anu, bolos vusazRvravt funqcias parametrebs, rogorc zemot davwereT
//vwert ase:
//let test = function test () {
// console. log(arguments[0]);
// }
//test ('giorgi', 'naniko','marina');//dabechdavs giorgi .
//anu roca ragac fuqncia shevqmeni da minda rom is mushaobdes, ogond winaswar ar vici ramdeni an da ra parametri
//meqneba da ragac moqmedeba minda shevasrulo funqciashi am parametrebze, am drtos idealuria am arguments-is gamoyeneba.
//am arguments-is daweris axali sintqqsi aris aseti:
//function test (...args) {//es sami wertili nishnavs, rom am funqcias ramdeni parametric ar unda gadaeces, uyvelas sheitans wertilebis shemdeg daweril cvladshi, am shemtxvevashi args-shi
//
// }
//test ('giorgi', 'naniko','marina');//anu es samive dagrovdeba args-shi masivad, anu mivigebt amas ra:
//let args = ['giorgi', 'naniko','marina']//manipulaciac am args cvladze moxdeba ise rogorc masivze. es chanawere aris ufro axali da jobs ase vimushavot arguments-tan.
//axla ukve tu davwert:
//function test (...args) {
//  console. log(args);
// }
//test ('giorgi', 'naniko','marina');//dabechdavs mtliad args masivad, amas:['giorgi', 'naniko','marina']. anu rodesac funqcias gadaecema bevri parametri da es parametrebi gvinda ert cvladshi davichirot amistvis viyenebt sam wertils.
//e chven ar gvzgudavs imashi, rom funqcias sxva parametrebic gavuwerot, anu magalitad, tu gvaqvs ori winaswar nobili parametri
//da danarcheni shemdeg gadaecema, bunebrtivia pirveli ori gautoldeba gadacemultagan pirvelor parametrs, xolo danarcheni sami wertiulis
// gamoyenebit gadava cvladshi, anu:
//function test (x, y, ...args) {
//  console. log(args);
// }
//test ('1', '2','3', '4', '5');//es nishnavs rom pirveli ori, anu x da y gautoldeba 1 da 2-s, anu x=1 y=2, xolo
// 3, 4 da 5 gaertiandeba mesame parametrei args-shi, romelic sami wertilis gamoyenebit samives gaaertianebs masivshi.
//ase magalitad tu gvsurs rom jami gavaketot:
//function sum (x, y, ...args) {
//  let result = x + y;//pirvel or parametrs vkreb, anu 1+2
//  for (let i = 0; i < args.length; i++){//args-ze vqmni loop-s da veubnebo, rom gadauaros yvela elements args-shi
//     let n = args[i]//n gautole argsi yovel elements
//     result += n;//da es args-is yvela elementio daumate zeda results, anu 1+2+args[i]
//  }
//  return result;//daabrune result cvladi
// }
//sum ('1', '2','3', '4', '5');// gadaveci parametrebi da es funqcia mogvcems am cifrebis jams.
//am arguments da sami wertilis cvladebis gamoyenebas qvia destruqturizacia.
//
//arsebobs aseti sintaqsic:
//[a, b, ...rest] = [1,2,3,4,5,6,7];// es nishnavs shemdegs: marcxena mxares arsebuli cvladebi igeben monacemebs marjvena mxares arsebuli monacemebidan.
//anu a = 1; b = 2; da rest = [3,4,5,6,7]; aset shedegs mivigebt. esec destruqturizaciis sintaqsia. es sam wertiliani cvladi sul bolos unda eweros.
//
//
//Tu obieqtis elementebistvis gvinda calke cvladebis sheqmna mag:
//let user = {
//    username: 'test';//dabvushvat gvinda, rom usernames mnishvneloba calke cvladshi shevinaxot
//    age: 32;
//    gender: 'male';
//}
//vwert let {username} = user; //es nishnavs, rom user obieqtshi ipovos key username da misi mnishvneloba sheitanos cvladshi, anu test gautolebs cvlads
//rom davlogot console.log(username), mivigebt test-s. aseti daweris shemtxvevashi cvladis saxels mnishvneloba aqvs
//anu cvladis saxelis property/key aucileblad unda iyos obieqtshi.
//ase shegviZlia ramdenime cvladi shevqmna am obieqtidan mag: let {username, age} = user;//amoviget usernames da age-s  mnishvneloba
//igive shegviZlia funqciazec, rodesac fuqnciidan obieqti brundewba mag:
//funqction getUser(){
//return{
//    username: 'test';
//    age: 32;
//    gender: 'male';
// }
//}
//let {username, age} = getUser();//igivea ogond amjerad funqciashi veZebt username da age parametrebs
//asec shemidzlia: let username = getUser().username;// ubralod roca sxvadasxva propertis cvladshi gadatana minda arakomfortulia. calcake unda wero mashin, age-ze calke unda gawero.
//aseve shemidzlia cvlads saxeli gadavarqva:
//vwert let {username: username1} = getUser();//es chnaweri nishnavs, rom funqcia getuser-dan igebs propertiu username-s da shehyavs cvladshi, ogond am cvlad arqmevs username1-s
//
//
//მასივის ფუნქციები: yoveli funqcia qmnis funqcias, romelic moqmedebes titoeul elementze
//
// Foreach: kodis Sesruleba ereis TiToeyuli elementesTvis
// let number = [1,3,5];
// numbers.foreach(//gadaecema parametri, rimelic aqedan aris funqcia//(n//es eni aris numbers-is elementis mnishvneloba, romelzec sruldeba funqcia) =>{
// console.log(n)
// }//aqamde) //anu ra xdeba axla aq, numbers-is foreach-s parametrad gadaeca funqcia, romelic ambobs, rom misi titoeuli elementi dalogos
//anu am funqciis gamoZaxeba moxdeba samjer da pirveli gamodzaxebisas eni iqneba 1, meored 3 da mesamed 5, anu foreach-it numbers-is titoeul elements vidzaxebt da masze vaketebt raRac funqcias,
//am shemtxvevashi ubralod logavs.
//numbers.foreach((n, i//es i aris elementis indeqsi//anu pirveli parametri aris mnishvneloba da meore elementis indeqsi, i iqnmeba tu be ar aqvs mnishvvneloba, mtavaria davimaxsovrot, rom pirveli parametri aris elementis value da meore elementis indeqsi) =>{
// Console.log(n)
// }.
//foreach funqcias aqsv sami parametri value indeqsi da tviton array. chven shegviZlia shevqmnat ragac funqcia da foreachit gamoviyenot is, mag:
//let numbers = ['test','test2','test3'];
//function toUpper(value, index, array) {
//       console.log(value.toUpperCase())
//}
// numbers.foreach(toUpper)//es aris foreach-is uketesi varianti, roca fubnqcia calkea da ara parametrad gadacemuli//anu shevqmeni funqcia, romelic gamoviZaxe foreach-it, numbers-is yovel elementze. funqciashi
//gavwere, rom yoveli value iyos didi asoti.
//
//
//
// Map: ereis TiToeuli elementis transformacia masivshi. qmnis axal masivs sadac transformirebulia titoeuli elementi da masivad ayalibebs
//let numbers2  = [2,5,20];
// let newArray = numbers2.map((value//anu numbers2-is titoeuli elementis mnisgvneloba) => {
//     return value * value;
// })
// console.log(newArray)
//aqac sami parametri aqvs rogorc foreach-s, gansxvaveba is aris, rom foreach-s masivad ar gamoaqvs, calke gamoaqvs titoeuli elementi.
//anu mapi cvlis elementebs da axal masivshi gadaaqvs, ase:
// let numbers2  = [2,5,20];
// let newArray = numbers2.map((value) => {
//     return value * value;
// })
// console.log(newArray)// mivigebt masivs let newArray = [4,25,400];//dabechdavs [4,25,400]
//map-is gamoyenebas azri ar aqvs tu ar gvinda, rom axal masvad chamoyalibdes. map-s aqvs return-i magram foreach-s ar aqvs return
//
//
//
// Filter: agenerirebs axal masivs, idzaxebs ragac funqcias masivis yvela elementisTvis, ubralod filter abrunebs true an false-s. mag:
// let numbers2  = [-4, -6, 2, -10, 5, 20];
//  let newArray = numbers2.filter((value) => {
//     return value >= 0;
//  })
//  console.log(newArray)//anu veubnebiT rom numbers2-shi ipovos 0ze meti ricxvebi da tu ipovis(tu true aris) chaagdos axal masivshi.
//chven shegviZlia es funqciebi ertad gamoviyenoT, magalitad:
//let numbers2  = [-4, -6, 2, -10, 5, 20];
//  let newArray = numbers2
//  .filter((value) => value >= 0)//figuruli frCxilis gareshec sheiZleba ase daiweros funqcia.
//  .map(x => x * x);
//  console.log(newArray);//aq xdeba shemdegi ram: jer varchevt dadebiT ricxvebs da shemdeg agvyavs kvadratshi
//
//
// Reduce: aucilebeli ar aris axal masivs agenerirebdes, man sheidzleba erti konkretuli mnishvneloba dasvas
//isic funqcias amoqmedebs yvela elementze ubralod reduse-is parametrebi ar aris parametrebi, misi parametrebia
// Accumulator, current value, current index, source array
// Accumulatori aris damgrovebeli, anu masvis elements agrovebs, igivea rac Semgrovebeli cvladi, funqciaSi. Magalitad:
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
//accumulator tu gansazgvruli ar aris misi mnishvneloba defoltad aris 0.
//let numbers2  = [-4, -6, 2, -10, 5, 20];
//  let newArray = numbers2
//  .filter((value) => value >= 0)//figuruli frCxilis gareshec sheiZleba ase daiweros funqcia.
//  .reduce((acc, cur)=> acc += cur,0);//0 sadac weria es aris argumentis adgili//es 0 aris accumulatoris gansazRgvruli mniSvneloba, romelic aris nuli, anu Semgrovebeli cvladi udris 0-s funqciis gashvebamde
//  console.log(newArray);//es kodi shekrebs dadebit ricxvebs da cvladad gamoitans ert konkretul mnishvnelobas, am shemtxvevashi jams, dabechdavs 27-s.
//
//let numbers2  = ['lorem', 'ipsum', 'dolor'];
//  let newArray = numbers2
//  .reduce((acc, cur)=> acc += ' ' + cur,''//stringi davwere);//anu accumulatoris tavdapirveli mnishvneloba aris carieli stringi
//  console.log(newArray);// es dabechdavs winadadebas lorem ipsum dolor
// let concat = [[0,1],[2,3],[4,5]].reduce(
//     function (accumulator, currentValue){
//         return accumulator.concat(currentValue)
//     },
//     []//aqac acumulators cariel masivad ganvsazgvrav
// )//es masivebis conkatenacias moaxdens anu gaaertianebs masivebs ert masivshi. amis mokle chanaweria:
// let concat = [[0,1],[2,3],[4,5]].reduce((accumulator, currentValue) => accumulator.concat(currentValue),[])
// console.log(concat)
//
// let numbers2  = [-4, -6, 2, -10, 5, 20];
//  let newArray = numbers2
//      .reduce((acc, cur)=>{
//          if (cur > 0){
//              acc += cur;
//          }
//          return acc
//      },0);
//  console.log(newArray);//es kodic shekrebs dadebit ricxvebs, gansxvaveba isaa, rom filtri filter funqciad ar gamoviyenet da reduce-shi gavweret if funqcia
//shemiZlia ramdenime reduce-is gamoyeneba shezguduli ar var, magalitad jer gavaertiano masivebi da shemdeg isini shevkribo:
// let concat = [[0,1],[2,3],[4,5]]
//     .reduce((accumulator, currentValue) =>
//         accumulator.concat(currentValue),
//             []
//     )//gavaertiane
//     .reduce((acc, cur)=> acc += cur,0);//shevkribe gaertianebuli
// console.log(concat)//dabechdavs 15-s

//davalebebi N2

//davaleba 1:
//
// let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam']
//
// let result = words.reduce((acc, cur, index)=>{
//     if (index % 2 === 1){
//         acc = acc + cur.toUpperCase() + ' ';
//     } else{
//         acc= acc + cur + ' ';
//     }
//     return acc
// },'')
// console.log(result)
//
// //davaleba 2:
// let words1 = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']
//
// let result1 = words1.filter((value)=>{
//     if (value.includes('m')){
//         return value
//     } else if (value.includes('M')){
//         return value
//     }
// })
// console.log(result1)
//
// //davaleba 3:
// let words2 = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi'].filter((value)=> value.includes('m') || value.includes('M'));
// console.log(words2)
//
// //davaleba 4:
// let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing']
//
// let result2 = items.map((value)=>{
//     if(typeof value === "number"){
//        return value * value
//     }else if (typeof value === "string"){
//         return value.toUpperCase()
//     }
//     return value
// })
// console.log(result2)
//
// //davaleba 5:
// let users = [
//     {name: 'giorgi', age: 16},
//     {name: 'levani', age: 90},
//     {name: 'nino', age: 30},
//     {name: 'otari', age: 11},
//     {name: 'mari', age: 28}
// ]
//
// let result3 = users.filter((value)=>{
//     if (value.age >= 18){
//         return value
//     }
// })
//     .map((value) => {
//         return value.name
//     })
//
// console.log(result3.join(' '))

//leqcia 4
/*html Tan manipulacia
* saitebTan muSaobisas Ziritadad frimvorkebs gamoiyeneben, zogavs developeris dros
*
* tegebTan moqmedebis funqciebi: html elementze manipulaciisas jer unda movZebnot elementi, amistvis
* html-shi elements vuwerT atributs id-is da js kodshi get.elementbyid-it vidzaxebt. aseve shegvizlia tegit gamovidzaxot
* queryselectorit js kodSi.
* document.getElementById('id');
* document.querySelector('tegi');
*
* stilis shecvlac shegvidzlia js-it, amistvis elementis id kods wertilit vuwert.style da shemdeg konkretuli css kodi.
* document.getElementById('id').style.width = '200px';
* ubralod css stilshi rac iwereba tireti aq unda gawero camelcase-it: mag: background-color
* document.getElementById('id').style.backgroundColor = 'green';
*
* getElementById-is ufro naklebad iyeneben, uketesia querySelector-it modzebno,radgan seleqtorit yvela atributit shegizlia mozebno, klasitac da
* id-itac da tegitac, ubralod css stilshi rogorc vwert ise: mag clasit modzebna:
* querySelector('.class') an id-it querySelector('#id') da ase shemdeg. amitom querySelector jobs
*
* queryseleqtor da queryseleqtorall-s shoris is gansxvavebaa, rom queryseleqtor-it gamodzaxebuli idzaxebs im elements romelsac ipovis htmlshi
* da queryseleqtorall-i masivad abrunebs da stilis an manipulaciis dros masivis konkretul elements unda mivmarto, mag:
* querySelectorAll('.class')[0].style. width = '200px';
*
* tu ramdenime elementze minda manipulacia ertdroulad amisTvis mdzimit gamovyob titoeuls, mag:
* querySelector('.class, .class1');
*
* shemidzlia elements mivanicho css-shi gawerili stili, amistvis js kodshi vwer element.classList.add('clasis stilis saxeli');
* add-is garda aris remove, romelic aclis class da toggle tu minichebuli aqvs unda moxsna da tu ar aqvs daemateba.
*
* arsebobs aseve setAtribute(), es tegs adzlevs atributs, magalitad shemidzlia title gavuwero tegs:
* setAtribute('title', 'test');//tets aris title-is mnishvneloba, anu vuwert title = 'test'; igivea.
*
* shegvidzlia wavsalot elementi amistvis remove-s viyeneb:
* elementCvladi.remove();ogond tu waishala waishleba sul. es shlis elements html kodidan
*
* chven aseve shegvidzlia elementis sheqmnac: magalitad add gilakebi rom gvxvdeba saitebze, amistvis:
* createElement()-s viyeneb, magalitad:
* let ul = createElement('tegi, romelic gvinda rom shevqmnad, mag: ul');ase sheiqmneba ul listi htmlshi
* amis shemdeg unda vutxrat brauzers tu sad chajdes es ul teqi, anu romel tegshi, romel mshobelshi, amistvis:
* mshbeliElementi(romelic query-it gamovidzaxe).appendChild(ul); anu jer vmni elements da mere vutiteb mshobels.
* davushvat li teqgi gvinda amjerad am ulshi movaqciot, romelic tavis mxriv mshobel elementshia, amistvis:
* let li = document.createElement('li'); ul.appendChild('li');
* tu gvsurs rom sheqmnil elementshi teqsti shevitanot, anu content teqsti mivutot vwert: li.textContent = 'php';
*
* mag:*/
//  let mainElement = document.querySelector('.main');
//
//  let names = ['php','javascript', 'c#'];
//  let ul = document.createElement('ul');
//  names.forEach(name => {
//      let li = document.createElement('li');
//      li.textContent = name;
//      ul.append.appendChild(li);
//  })
// console.log(names);

/*aseve shemidzlia elements mivanicho css-shi shemnili klasi, amistvis elementis cvlads vuwer .classList.add('');
* class-is wasashlelad viyenebt .classList.remove(''); */

// html-is js-it awyoba let body = document.querySelector('body');
//
// let button = document.querySelector('.buttonClass');
//
// let innerButton = document.createElement('button');
//
// innerButton.classList.add('button');
// innerButton.setAttribute('id', 'changeButton');
// innerButton.textContent = 'Change Name';
//
// button.appendChild(innerButton);
//
// let form = document.createElement('form');
// form.classList.add('forma');
// body.appendChild(form);
//
// let label = document.createElement('label');
// label.classList.add('Choose');
// label.setAttribute('id','choose');
// form.appendChild(label);
//
// let select = document.createElement('select');
// select.classList.add('HomeWork');
// select.setAttribute('name, id', 'Hopmework, homeworkOption');
// form.appendChild(select);




// html kodi <form className="forma">
//     <label className="Choose" id="choose">
//     </label>
//     <select className="HomeWork" name="Homework" id="homeworkOption" onChange="myFunction()">
//         <option value="nothing"></option>
//         <option value="homeWork1">დავალება 1 - სიმბოლო = 5 და მეტს</option>
//         <option value="homeWork2">დავალება 2 - დადებითი რიცხვები</option>
//         <option value="homeWork3">დავალება 3 - დადებითი რიცხვები მასივის მასივიდან</option>
//         <option value="homeWork4">დავალება 4 - getMax</option>
//         <option value="homeWork5">დავალება 5 - printName</option>
//     </select>
// </form>
// <div className="results">
//     <b style="margin-left: 25px">Results:</b>
//     <div className="homeworkCont">
//         <label className="jsCode">
//             JS Code:
//         </label>
//         <div className="codeWritten1" id="homework11">
//             <p>
//                 "let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];<br><br>
//                 for (let x = 0; x < arr.length; x++){
//                 <br>
//                     if(arr[x].length>=5){<br>
//                     console.log(arr[x])
//                     }
//                     }"
//                 </p>
//                     </div>
//                     <div class="codeWritten2" id="homework2">
//                     <p>
//                     let arr2 = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];<br>
//                     for (let x = 0; x< arr.length; x++){<br>
//                     if(arr[x]>0){<br>
//                     console.log(arr2[x])
//                     }
//                     }
//                     </p>
//                     </div>
//                     <div class="codeWritten3" id="homework3">
//                     <p>
//                     let arr3 = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];<br>
//                     for (let x in arr3){<br>
//                     for(let y in arr3[x]){<br>
//                     if(arr3[x][y]>0){<br>
//                     console.log(arr3[x][y])
//                     }
//                     }
//                     }
//                     </p>
//                     </div>
//                     <div class="codeWritten4" id="homework4">
//                     <p>
//                     let arr4 = [1, 15, 6, 30];<br>
//                     console.log(Math.max(...arr4));
//
//                     </p>
//                     </div>
//                     <div class="codeWritten5" id="homework5">
//                     <p>
//                     let user = {<br>
//                     firstname: 'giorgi',<br>
//                     lastname: 'saakadze',<br>
//                     age: 32,<br>
//                     isLoggedIn: true<br>
//                     }<br>
//
//                     function printName(x){<br>
//                     if(x.isLoggedIn === true){<br>
//                     console.log(x.firstname + ' ' + x.lastname)
//                     }<br>else {<br>
//                     console.log('false')
//                     }
//                     }<br>
//                     printName(user)
//                     </p>
//                     </div>
//                     <button class="runner" id="codeRunner" onclick="clickChange()">Run code</button>
//                     </div>
//                     <div class="result">
//                     Result:
//                     <div class="Result1" id="result1">
//                     javascript<br>
//                     python<br>
//                     kotlin<br>
//                     swift<br>
//                     </div>
//                     <div class="Result2" id="result2">
//                     2<br>
//                     5<br>
//                     11<br>
//                     1<br>
//                     100
//                     </div>
//                     <div class="Result3" id="result3">
//                     2<br>
//                     5<br>
//                     11<br>
//                     1<br>
//                     100
//                     </div>
//                     <div class="Result4" id="result4">
//                     30
//                     </div>
//                     <div class="Result5" id="result5">
//                     giorgi saakadze
//                     </div>
//                     </div>
//                     </div>
