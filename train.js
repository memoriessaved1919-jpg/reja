// // G- TASK
// console.log("G-TASK javiblari");

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va 
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin. 
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.


// function getHighestIndex (arr) {
//     let engKatta = arr[0];
//     let engKattaIndex = 0


//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > engKatta) {
//             engKatta = arr[i]
//             engKattaIndex = i;
//         }
//     }
//     return engKattaIndex
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));











// E-TASK

//Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin. MASALAN: getReverse("hello") return qilsin "olleh".

// function teskari (str) {
//     return str.split('').reverse('').join('');
// } 

// console.log(teskari("hello"))

//  // D- TASK
//  console.log("D-TASK javiblari");

// class Shop {

//     constructor(non,lagmon,cola) {
//         this.mahsulotlar = {
//             non: non,
//             lagmon: lagmon,
//             cola: cola
//         };
//     }
     
//     qoldiq() {
//         const vaqt = new Date()
//         const soat = vaqt.getHours();
//         const daqiqa = vaqt.getMinutes()
//         return `hozir ${soat}:${daqiqa}da ${this.mahsulotlar.non}ta non, ${this.mahsulotlar.lagmon}ta lagmon va ${this.mahsulotlar.cola}ta cola bor`
//     }
    
//     sotish(mahsulot, son) {
//         const vaqt = new Date();
//         console.log(`sotish() sotildi: ${vaqt.getHours()}: ${vaqt.getMinutes()}`);
//         this.mahsulotlar[mahsulot] -= son 
//     }

//     qabul(mahsulot,son) {
//         const vaqt = new Date();
//         console.log(`qabul() olindi: ${vaqt.getHours()}: ${vaqt.getMinutes()}`);
//         this.mahsulotlar[mahsulot] += son 
//     }
// }

// const shop = new Shop(4,5,2);
// console.log(shop.qoldiq());
// shop.sotish('non', 3);
// shop.qabul('cola', 5);
// console.log(shop.qoldiq())



// // C- TASK
// console.log("C-TASK javiblari");

// function checkContent (st1, st2) {
//     let str1 = st1.split("");
//     let str2 = st2.split("")

//     str1.sort();
//     str2.sort();

//     return str1.join("") === str2.join("");
// }
// console.log(checkContent("mitgroup", "gmtiprou"));


// // B-TASK
// console.log("B-TASK Javoblari")
// function countDigits (word) {
//     let sana = 0
//     for(let i = 0; i < word.length; i++) {
//         if(!isNaN(word[i])){
//             sana++;
//         }
//     }
//     return sana;

// }

// console.log(countDigits("g3s6dje8xt6ga4bv13"))



// function raqamSana (word) {
//     let count = 0;
//     for(let i = 0; i < word.length; i++) {
//         if(!isNaN(word[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(raqamSana("6g3dg36dg23dfg427f6fg7f"));



// function countLetter (word) {
//     let hesob = 0
//     for(let i = 0; i < word.length; i++) {   ////index tekshiryapti
//         if (!isNaN(word[i])) {
//         hesob++;
//     }
//     } 
    
//     return hesob;

// }
// console.log(countLetter("F668tball"))









// // A-TASK bajarildi:

// console.log("A-TASK Javoblari")

// function counterLetter (letter,word) {
//     let count = 0;

//     for(let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//         count++;
//     } 
//   }
//   return count;
// }

// console.log(counterLetter("s", "sister"));


// function harfiniSana (letter,word){
//     let sana = 0;

//     for(let i = 0; i < word.length; i++)
//         if (word[i] === letter) {
//             sana++;
//         }
//         return sana;
// } 

// console.log(harfiniSana("a","banana"));

// function meniSana (letter,word) {
//     let sana = 0
//     for(let i = 0; i < word.length; i++);
//     if (word[i] === letter) {
//         sana++
//     }
//     return sana;
// }
// console.log (harfiniSana("e", "interesting"))



















// console.log ("Jack Ma maslahtlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchliy bolgan narsalarni qiling", // 40-50
//     "yoshlarga invertitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq", // 60
// ];

// function maslahatBering (a, callback) {
//     if (typeof a !== 'number') callback("insert a number",null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback (null, list[1]);
//     else if (a > 30 && a <= 40) callback (null, list[2]);
//     else if (a > 40 && a <= 50) callback (null, list[3]);
//     else if (a > 50 && a <= 60) callback (null, list[4]);
//     else {
//         setTimeout (function () {
//             callback(null, list[5]);
//         }, 5000)
        
//     } 
// }

// // callback - (parametr) siftida functioni ishga tushadi
// console.log('passed here 0');
// maslahatBering(65 , (err, data) => {
//     if (err) console.log ("ERROR:", err)
//         else console.log ("Javob:",data)
// });
// console.log('passed here 1')


// ASYNC function

// console.log ("Jack Ma maslahtlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchliy bolgan narsalarni qiling", // 40-50
//     "yoshlarga invertitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq", // 60
// ];

// setInterval asynchronousda ishlamaydi.
/* async function maslahatBering (a) {
    if (typeof a !== 'number') throw new Error("insert a number");
    else if (a <= 20) return (list[0]);
    else if (a > 20 && a <= 30) return (list[1]);
    else if (a > 30 && a <= 40) return (list[2]);
    else if (a > 40 && a <= 50) return (list[3]);
    else if (a > 50 && a <= 60) return (list[4]);
    else {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5])
            }, 5000 )
        });  
        // setTimeout (function () {
        //     return (list[5]);
        // }, 5000)
        
    } 
} */

// then - catch 
// Bir vaqtni ozida 2 ta javobni chiqarmoqchi bolsam noqulay bo'lib (piramida)bop ketadi.


// console.log('passed here 0');
// maslahatBering(5)
// .then((data) => {
//     console.log('javob:',data)
// })
// .catch((err) => {
//     console.log('ERROR:', err);
// })
// console.log('passed here 1');

// Asynchronous functionni call qismida ham ishlatamiz
// Bunda biz async va awaitdan foydalanamiz


// async await qismda ketma ketlikk amal qiladi (1-javob, 2-javob,3-javob).
/*async function run() {
    let javob = await maslahatBering(22);
    console.log(javob);
    javob = await maslahatBering(80);
    console.log(javob);
} 
run()*/


// setIntervalni callbackda ishlaydi

// function maslahatBering (a, callback) {
//     if (typeof a !== 'number') callback("insert a number",null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback (null, list[1]);
//     else if (a > 30 && a <= 40) callback (null, list[2]);
//     else if (a > 40 && a <= 50) callback (null, list[3]);
//     else if (a > 50 && a <= 60) callback (null, list[4]);
//     else {
//         setInterval ( function ()  {
//             callback(null, list[5]);
//         }, 1000)
        
//     } 
// }

// console.log('passed here 0');
// maslahatBering(65 , (err, data) => {
//     if (err) console.log ("ERROR:", err)
//         else console.log ("Javob:",data)
// });
// console.log('passed here 1')