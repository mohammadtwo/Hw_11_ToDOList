import { El } from "../../utils/El";

export function Header() {
  return El({
    element: "div",
    className: "w-full bg-[#6200ea] p-1.5 h-auto flex",
    children: [
      El({
        element: "div",
        className:"flex justify-center items-center gap-1.5 flex-1 text-white",
        children: [
          El({
            element: "img",
            src: "../../../public/assets/todo.svg",
            alt: "logo",
          }),
          El({element:"h1",
            className:"text-7xl",
            innerText:"My To-DO Tasks",className:"flex-1"})
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
                className: "bg-[#7926ed] pl-8 p-1 relative rounded-md",
              }),
              El({
                element: "img",
                src: "../../../public/assets/search.svg",
                className: "absolute top-1 left-1",
              }),
            ],
          }),

          El({
            element: "img",
            src: "../../../public/assets/filter.svg",
            alt: "filter",
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
