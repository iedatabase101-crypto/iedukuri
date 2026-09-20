const categories=[
{title:"土地",desc:"立地・環境・広さ・価格など、土地選びのポイントを整理しましょう。",img:"land",icon:"⌖"},
{title:"建物",desc:"間取り・構造・断熱・外観など、家の基本となる部分を確認しましょう。",img:"building",icon:"⌂"},
{title:"設備",desc:"キッチン・浴室・トイレなど、暮らしを支える設備をチェックしましょう。",img:"kitchen",icon:"⚙"},
{title:"電気・通信・防犯",desc:"電気設備・インターネット・防犯対策など、安心で快適な暮らしのための設備を確認しましょう。",img:"solar",icon:"♧"},
{title:"外構",desc:"庭・駐車場・フェンス・アプローチなど、外まわりの計画を考えましょう。",img:"garden",icon:"♧"}
];
const grid=document.getElementById("category-grid");
grid.innerHTML=categories.map((c,i)=>`<a class="category-card" href="#category-${i+1}" data-category="${c.title}"><div class="cat-img ${c.img}"></div><div class="cat-body"><div class="cat-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.desc}</p><span class="cat-arrow">›</span></div></a>`).join("");
grid.addEventListener("click",e=>{
 const card=e.target.closest(".category-card"); if(!card)return;
 e.preventDefault();
 const name=card.dataset.category;
 document.querySelector(".breadcrumb").textContent=name+"を選択しました";
 card.animate([{transform:"translateY(-2px)"},{transform:"translateY(0)"}],{duration:220});
});
document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".sidebar")?.classList.toggle("open"));