let statistics = [
  {
    sarlavha: "01",
    izoh: "Introduction to HTML",
  },
  {
    sarlavha: "02",
    izoh: "Styling with CSS",
  },
  {
    sarlavha: "03",
    izoh: "Introduction to Responsive Design",
  },
  {
    sarlavha: "04",
    izoh: "Design Principles for Web",
  },
  {
    sarlavha: "05",
    izoh: "Building a Basic Website",
  },
];

function Yaratish() {
  let numbers = document.querySelector(".numbers");
  let card = statistics.map((e) => {
    return `
     <div class="number bg-[#fff] hover:bg-[#f5f5f5] hover:translate-y-2 cursor-pointer transition-all duration-200 ease-in-out border-collapse border-[1px] border-[#E0E0E0] rounded-[8px] p-[20px]">
        <h4 class="text-[24px] font-bold">${e.sarlavha}</h4>
        <span class="text-[16px] block max-w-[150px] text-[#666666]">${e.izoh}</span>
      </div>
    `;
  });
  numbers.innerHTML = card.join("");
}
Yaratish();

//
let uxstatistics = [
  {
    sarlavha: "01",
    izoh: "Introduction to HTML",
  },
  {
    sarlavha: "02",
    izoh: "Styling with CSS",
  },
  {
    sarlavha: "03",
    izoh: "Introduction to Responsive Design",
  },
  {
    sarlavha: "04",
    izoh: "Design Principles for Web",
  },
  {
    sarlavha: "05",
    izoh: "Building a Basic Website",
  },
];

function YaratishUx() {
  let numbers = document.querySelector(".ux");
  let card = uxstatistics.map((e) => {
    return `
     <div class="number bg-[#fff] hover:bg-[#f5f5f5] hover:translate-y-2 cursor-pointer transition-all duration-200 ease-in-out border-collapse border-[1px] border-[#E0E0E0] rounded-[8px] p-[20px]">
        <h4 class="text-[24px] font-bold">${e.sarlavha}</h4>
        <span class="text-[16px] block max-w-[150px] text-[#666666]">${e.izoh}</span>
      </div>
    `;
  });
  numbers.innerHTML = card.join("");
}
YaratishUx();
