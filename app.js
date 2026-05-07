let products = [
  {
    id: 1,
    img: "pc.png",
    nomi: "DEEP SLEEP TONIC",
    narxi: "$85",
  },
  {
    id: 1,
    img: "pc2.png",
    nomi: "DEEP SLEEP TONIC",
    narxi: "$85",
  },
  {
    id: 1,
    img: "pc3.png",
    nomi: "DEEP SLEEP TONIC",
    narxi: "$85",
  },
];
function Yaratish() {
  let cards = document.querySelector(".cards");

  let card = products.map((e) => {
    return `
        <div class="card">
            <div class="img-box bg-[#e1e1e1] text-center">
                <img class="m-auto h-[450px] " src="${e.img}" alt="">
            </div>
            <div class="prices-box flex justify-between my-[10px]">
                <h4 class="text-[18px] text-[#454545] font-bold  ">${e.nomi}</h4>
                <span class="text-[18px] text-[#454545] font-medium  ">${e.narxi}</span>
            </div>
        </div>
    `;
  });

  cards.innerHTML = card.join("");
}
Yaratish();
