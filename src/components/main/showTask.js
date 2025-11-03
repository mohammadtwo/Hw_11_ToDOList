import { El } from "../../utils/El";

export function Main() {
  return El({
    element: "div",
    className:
      "grid grid-cols-2 w-full border gap-0.5 bg-gray-300  sm:grid-cols-3 lg:grid-cols-5",
    children: [
      El({
        element: "div",
        className: " bg-white p-2 text-2xl",
        innerText: "Task Name",
      }),
      El({
        element: "div",
        className: "hidden bg-white  p-2 text-2xl lg:block",
        innerText: "Priority",
      }),
      El({
        element: "div",
        className: "hidden bg-white p-2 text-2xl lg:block",
        innerText: "status",
      }),
      El({
        element: "div",
        className: "hidden bg-white p-2 text-2xl sm:block ",
        innerText: "Deadline",
      }),
      El({
        element: "div",
        className: "  bg-white p-2 text-2xl",
        innerText: "Action",
      }),
      ...ShowTasks(arrTasks)
    ],
  });
}
let arrTasks = [
  {
    id: 1,
    title: "walk",
    description: "walking with a dog",
    Deadline: "1998/09/02",
    priority: 1,
    stats: -1,
  },
];

function ShowTasks(arr) {
  return arr.flatMap((item) => [
    El({ element: "div", innerText: item.title }),
    El({ element: "div", innerText: priority(item.priority) }),
    El({ element: "div", innerText: stats(item.stats) }),
    El({ element: "div", innerText: item.Deadline }),
    createAction()
])
}
function priority(priority) {
  let result;
  if (priority === 1) {
    result = "High";
  } else if (priority === 0) {
    result = "Medium";
  } else if (priority === -1) {
    result = "Low";
  }

  if (priority === "High") {
    result = 1;
  } else if (priority === "Medium") {
    result = 0;
  } else if (priority === "Low") {
    result = -1;
  }

  return result;
}
function stats(stat) {
  let result;
  if (stat === 1) {
    result = "Done";
  } else if (stat === 0) {
    result = "Doing";
  } else if (stat === -1) {
    result = "Todo";
  }
  if (stat === "Done") {
    result = 1;
  } else if (stat === "Doing") {
    result = 0;
  } else if (stat === "Todo") {
    result = -1;
  }
  return result;
}
function createAction() {
  return El({
    element: "div",
    className: "flex gap-1.5 justify-center",
    children: [
      El({
        element: "div",
        className: "bg-[#dc3545]",
        children: [
          El({ element: "img", src: "../../../public/assets/bin.svg" }),
        ],
      }),
      El({
        element: "div",
        className: "bg-[#0d6efd]",
        children: [
          El({ element: "img", src: "../../../public/assets/pen.svg" }),
        ],
      }),
      El({
        element: "div",
        className: "bg-[#6c757d]",
        children: [
          El({ element: "img", src: "../../../public/assets/eye.svg" }),
        ],
      }),
    ],
  });
}
