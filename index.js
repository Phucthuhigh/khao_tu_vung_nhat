let randInt = (max, min) => Math.floor(Math.random() * (max - min) ) + min;

let bang_chu_cai_str = `あ a	い i	う u	え e	お o	か ka	き ki	く ku	け ke	こ ko	が ga	ぎ gi	ぐ gu	げ ge	ご go	さ sa	し shi	す su	せ se	そ so	ざ za	じ ji	ず zu	ぜ ze	ぞ zo	た ta	ち chi	つ tsu	て te	と to	だ da	ぢ ji	づ zu	で de	ど do	な na	に ni	ぬ nu	ね ne	の no	は ha	ひ hi	ふ fu	へ he	ほ ho	ば ba	び bi	ぶ bu	べ be	ぼ bo	ぱ pa	ぴ pi	ぷ pu	ぺ pe	ぽ po	ま ma	み mi	む mu	め me	も mo	や ya		ゆ yu		よ yo	ら ra	り ri	る ru	れ re	ろ ro	わ wa	を wo	ん m`;

let bang_chu_cai_raw = bang_chu_cai_str.split("\t");
let bang_chu_cai = {};
for (let i = 0; i < bang_chu_cai_raw.length; i++) {
    if (bang_chu_cai_raw[i] == "") {
        bang_chu_cai_raw.splice(i, 1);
        --i;
    }
}
for (let i = 0; i < bang_chu_cai_raw.length; i++) {
    let key = bang_chu_cai_raw[i].split(" ")[0];
    let val = bang_chu_cai_raw[i].split(" ")[1];
    bang_chu_cai[key] = val;
}

let rand_idx = randInt(bang_chu_cai_raw.length-1, 0);
document.querySelector("#question").innerHTML = `<h2 id="txt_question">
${Object.keys(bang_chu_cai)[rand_idx]}</h2>`;

document.querySelector(".submit_button").addEventListener("click", () => {
    if (document.querySelector(".check__hiragana--input").value == bang_chu_cai[Object.keys(bang_chu_cai)[rand_idx]]) {
        document.querySelector("#answer").innerHTML = `<h1>Đúng</h1>`;
        rand_idx = randInt(bang_chu_cai_raw.length-1, 0);
        document.querySelector("#question").innerHTML = `<h2 id="txt_question">
        ${Object.keys(bang_chu_cai)[rand_idx]}</h2>`;
        document.querySelector(".check__hiragana--input").value = "";
        document.querySelector("#answer").innerHTML = "";
    } else {
        document.querySelector("#answer").innerHTML = `<h1>Sai</h1>`;
        document.querySelector("#answer").innerHTML += `<h1>${bang_chu_cai[Object.keys(bang_chu_cai)[rand_idx]]}</h1>`;
    }
})
