import { El } from "../../utils/El";
const srcImgSelectBox = "../../../public/assets/select.svg";
const arrShowRows = ["All", "1-3", "1-5", "1-10"];

export function Footer() {
  return El({
    element: "div",
    className:
      "w-full flex items-center gap-1 sm:pag2 lg:gap-3  justify-end px-1 sm:px-2 lg:px-3",
    children: [
      El({
        element: "div",
        className: "flex justify-end p-3",
        children: [
          El({
            element: "div",
            className: "flex justify-center items-center gap-2",
            innerText: "Rows per pages:",
            children: [selectBox(arrShowRows, srcImgSelectBox, "hidden")],
          }),
        ],
      }),
      showRow(),
      El({
        element: "div",
        className: "flex justify-center items- gap-2",
        children: [
          El({
            element: "img",
            src: "../../../public/assets/arrowBack.svg",
            alt: "arrow back page",
          }),
          El({
            element: "img",
            src: "../../../public/assets/arrowNext.svg",
            alt: "arrow next page",
          }),
        ],
      }),
    ],
  });
}

function selectBox(arr, url, display = "grid", h = "30") {
  return El({
    element: "div",
    className: `relative`,

    children: [
      El({
        element: "img",
        src: `${url}`,
        alt: "select box",
      }),
      El({
        element: "div",
        className: `absolute h-${h} lg:h-40   w-[250px] bg-[#6200ea] ${display}   place-items-center gap-2 p-4  overflow-y-auto top-full right-0 rounded-b-xl lg:w-[500px] `,
        children: arr.map((item) => {
          return El({
            element: "div",
            innerText: item,
            className:
              "text-center p-2 w-full bg-[#7926ed] text-white rounded-md",
          });
        }),
      }),
    ],
  });
}
function showRow(num1 = "1-1", num2 = "1") {
  let result = El({
    element: "div",
    className: "flex gap-1.5",
    children: [
      El({ element: "span", innerText: num1 }),
      El({ element: "span", innerText: "of" }),
      El({ element: "span", innerText: num2 }),
    ],
  });
  return result;
}
