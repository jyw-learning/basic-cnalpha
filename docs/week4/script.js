const keywords = ["騎單車", "健身", "彈吉他", "拍照"]; // 定義要變粗體的關鍵字

function highlightKeywords(text) {
    keywords.forEach(keyword => {
        const regex = new RegExp(keyword, "g"); // 建立正則表達式（全局替換）
        text = text.replace(regex, `<strong>${keyword}</strong>`); // 將關鍵字加上 <strong>
    });
    return text;
}

const hobbies = [
    { text: "我很喜歡騎單車，因為從事這項運動會讓我感到無比的放鬆", img: "bike.jpg" },
    { text: "健身是我生活的必備品，它比女朋友還來得更重要...", img: "gym.jpg" },
    { text: "彈吉他是我的靈魂出口，每個音符都是我的故事", img: "guitar.jpg" },
    { text: "世上不缺乏美，而是缺少發現美的雙眼。因此我也很喜歡拍照...", img: "photo.jpg" },
];

let currentHobby = 0;
const hobbyText = document.getElementById("hobbyText");
const hobbyImage = document.getElementById("hobbyImage");
const hobbyBtn = document.getElementById("hobbyBtn");

hobbyBtn.addEventListener("click", () => {
    currentHobby = (currentHobby + 1) % hobbies.length;
    hobbyText.innerHTML = highlightKeywords(hobbies[currentHobby].text);
    hobbyImage.src = hobbies[currentHobby].img;
});

