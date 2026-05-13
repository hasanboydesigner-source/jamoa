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
    izoh: "Introduction to UI/UX Design",
  },
  {
    sarlavha: "02",
    izoh: "User Research and Personas",
  },
  {
    sarlavha: "03",
    izoh: "Wireframing and Prototyping",
  },
  {
    sarlavha: "04",
    izoh: "Visual Design and Branding",
  },
  {
    sarlavha: "05",
    izoh: "Usability Testing and Iteration",
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
//

let mobilestatistics = [
  {
    sarlavha: "01",
    izoh: "Introduction to Mobile App Development",
  },
  {
    sarlavha: "02",
    izoh: "Fundamentals of Swift Programming (iOS)",
  },
  {
    sarlavha: "03",
    izoh: "Fundamentals of Kotlin Programming (Android)",
  },
  {
    sarlavha: "04",
    izoh: "Building User Interfaces",
  },
  {
    sarlavha: "05",
    izoh: "App Deployment and Testing",
  },
];

function YaratishMobile() {
  let numbers = document.querySelector(".mobile");
  let card = mobilestatistics.map((e) => {
    return `
     <div class="number bg-[#fff] hover:bg-[#f5f5f5] hover:translate-y-2 cursor-pointer transition-all duration-200 ease-in-out border-collapse border-[1px] border-[#E0E0E0] rounded-[8px] p-[20px]">
        <h4 class="text-[24px] font-bold">${e.sarlavha}</h4>
        <span class="text-[16px] block max-w-[150px] text-[#666666]">${e.izoh}</span>
      </div>
    `;
  });
  numbers.innerHTML = card.join("");
}
YaratishMobile();
//

//

let grafikstatistics = [
  {
    sarlavha: "01",
    izoh: "Introduction to Graphic Design",
  },
  {
    sarlavha: "02",
    izoh: "Typography and Color Theory",
  },
  {
    sarlavha: "03",
    izoh: "Layout Design and Composition",
  },
  {
    sarlavha: "04",
    izoh: "Image Editing and Manipulation",
  },
  {
    sarlavha: "05",
    izoh: "Designing for Print and Digital Media",
  },
];

function YaratishGrafik() {
  let numbers = document.querySelector(".grafik");
  let card = grafikstatistics.map((e) => {
    return `
     <div class="number bg-[#fff] hover:bg-[#f5f5f5] hover:translate-y-2 cursor-pointer transition-all duration-200 ease-in-out border-collapse border-[1px] border-[#E0E0E0] rounded-[8px] p-[20px]">
        <h4 class="text-[24px] font-bold">${e.sarlavha}</h4>
        <span class="text-[16px] block max-w-[150px] text-[#666666]">${e.izoh}</span>
      </div>
    `;
  });
  numbers.innerHTML = card.join("");
}
YaratishGrafik();

//

let Frontstatistics = [
  {
    sarlavha: "01",
    izoh: "HTML Fundamentals",
  },
  {
    sarlavha: "02",
    izoh: "CSS Styling and Layouts",
  },
  {
    sarlavha: "03",
    izoh: "JavaScript Basics",
  },
  {
    sarlavha: "04",
    izoh: "Building Responsive Websites",
  },
  {
    sarlavha: "05",
    izoh: "Introduction to Bootstrap and React",
  },
];

function YaratishFront() {
  let numbers = document.querySelector(".front");
  let card = Frontstatistics.map((e) => {
    return `
     <div class="number bg-[#fff] hover:bg-[#f5f5f5] hover:translate-y-2 cursor-pointer transition-all duration-200 ease-in-out border-collapse border-[1px] border-[#E0E0E0] rounded-[8px] p-[20px]">
        <h4 class="text-[24px] font-bold">${e.sarlavha}</h4>
        <span class="text-[16px] block max-w-[150px] text-[#666666]">${e.izoh}</span>
      </div>
    `;
  });
  numbers.innerHTML = card.join("");
}
YaratishFront();
