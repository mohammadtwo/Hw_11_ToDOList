import { El } from "../../utils/El";

const arrFilter = [
  "Oldest",
  "Newest",
  "ToDo",
  "Doing",
  "Done",
  "High priority",
  "Medium priority",
  "Low priority",
];

export function Header() {
  return El({
    element: "div",
    className: "w-full bg-[#6200ea] p-1.5 h-auto flex",
    children: [
      El({
        element: "div",
        className: "flex justify-center items-center gap-1.5 flex-1 text-white",
        children: [
          El({
            element: "img",
            src: "../../../public/assets/todo.svg",
            alt: "logo",
          }),
          El({
            element: "h1",
            className: "text-7xl",
            innerText: "My To-DO Tasks",
            className: "flex-1",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-end gap-2 flex-1",
        children: [
          El({
            element: "img",
            src: "../../../public/assets/search.svg",
            alt: "search",
            className: "sm:hidden",
          }),
          El({
            element: "div",
            className: "relative hidden sm:inline",
            children: [
              El({
                element: "input",
                placeholder: "search",
                className:
                  "bg-[#7926ed] pl-8 p-1 outline-none text-white relative rounded-md",
              }),
              El({
                element: "img",
                src: "../../../public/assets/search.svg",
                className: "absolute top-1 left-1",
              }),
            ],
          }),

          El({
            element: "div",
            className: "relative",

            children: [
              El({
                element: "img",
                src: "../../../public/assets/filter.svg",
                alt: "filter",
                className: "",
              }),
              El({
                element: "div",
                className:
                  "absolute  h-50 w-[250px] bg-[#6200ea]  grid place-items-center overflow-auto gap-2 p-4  overflow-x-scroll top-full right-0 rounded-b-xl lg:w-[500px]",
                children: arrFilter.map((item) => {
                  return El({
                    element: "div",
                    innerText: item,
                    className:
                      "text-center p-2 w-full bg-[#7926ed] text-white rounded-md",
                  });
                }),
              }),
            ],
          }),
          El({
            element: "img",
            src: "../../../public/assets/plus.svg",
            alt: "plus",
          }),
         
        ],
      }),
    ],
  });
}
