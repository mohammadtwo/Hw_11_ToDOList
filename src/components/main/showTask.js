import { El } from "../../utils/El";
import { handelShowModal } from "../header/header";
const arrColor = [
  { bgRed: "bg-[#dc3545]", bgTextWithe: "text-[#fcf8f7]" },
  { bgGray: "bg-[#ebebeb]", bgTextBlack: "text-[#28323f]" },
  { bgYellow: "bg-[#ffc107]", bgTextBorne: "text-[#2c2401]" },
  { bgGreen: "bg-[#2e7d32]", bgTextGreen: "text-[#f6f7eb]" },
];
let arrData = JSON.parse(localStorage.getItem("data")) || [];
let arrTasks = arrData.map((item, index) => ({
  id: index + 1,
  title: item.title,
  description: item.description,
  Deadline: item.date,
  priority: priority(item.priority.toLowerCase()),
  stats: stats(item.stats.toLowerCase()),
}));
// arrTasks=arrTasks.Filter((item)=>item.id !=item.id)

// let arrTasks = [
//   {
//     id: 1,
//     title: "walk",
//     description: "walking with a dog",
//     Deadline: "1998/09/02",
//     priority: 0,
//     stats: 1,
//   },
//   {
//     id: 2,
//     title: "walk",
//     description: "walking with a dog",
//     Deadline: "1998/09/02",
//     priority: 0,
//     stats: 1,
//   },
//   {
//     id: 3,
//     title: "walk",
//     description: "walking with a dog",
//     Deadline: "1998/09/02",
//     priority: -1,
//     stats: -1,
//   },
//   {
//     id: 4,
//     title: "walk",
//     description: "walking with a dog",
//     Deadline: "1998/09/02",
//     priority:1,
//     stats: 0,
//   },
// ];
// function
export function Main() {
  return El({ element: "div", innerText: "loading...", id: "task-container" });
}
export function createTasks() {
  const taskContainer = document.getElementById("task-container");

  let result = El({
    element: "div",
    eventListener: [
      {
        event: "click",
        callback: handelBtnTask,
      },
    ],
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
      ...ShowTasks(arrTasks),
    ],
  });
  taskContainer.innerHTML = "";
  taskContainer.appendChild(result);
}
export function ShowTasks(arr) {
  return arr.flatMap((item) => [
    El({
      element: "div",

      className: `p-5 grid place-items-start lg:bg-white  text-xl ${statsBg(
        item.stats,
        arrColor
      )} `,
      children: [
        El({
          element: "div",
          innerText: item.title,
          className: ` w-fit h-fit border lg:border-none lg:bg-white lg:text-black ${priorityBg(
            item.priority,
            arrColor
          )} p-3 rounded-2xl `,
        }),
      ],
    }),
    El({
      element: "div",
      className: "p-5 lg:grid place-items-center bg-white text-xl  hidden",
      children: [
        El({
          element: "div",
          className: `${priorityBg(item.priority, arrColor)} p-3 rounded-3xl`,
          innerText: priority(item.priority),
        }),
      ],
    }),
    El({
      element: "div",
      className: "p-5 lg:grid place-items-center  bg-white text-xl hidden",
      children: [
        El({
          element: "div",
          className: `${statsBg(item.stats, arrColor)} p-3 rounded-3xl`,
          innerText: stats(item.stats),
        }),
      ],
    }),
    El({
      element: "div",
      className: `p-5 sm:grid lg:bg-white place-items-center ${statsBg(
        item.stats,
        arrColor
      )} hidden`,
      children: [
        El({
          element: "div",
          className: "lg:text-black border-2 p-2 border-[#5599fe] rounded-4xl",
          innerText: item.Deadline,
        }),
      ],
    }),
    createAction(item),
  ]);
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

  if (priority === "high") {
    result = 1;
  } else if (priority === "medium") {
    result = 0;
  } else if (priority === "low") {
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
  if (stat === "done") {
    result = 1;
  } else if (stat === "doing") {
    result = 0;
  } else if (stat === "todo") {
    result = -1;
  }
  return result;
}
function createAction(obj) {
  return El({
    element: "div",
    className: `flex ${statsBg(
      obj.stats,
      arrColor
    )} justify-center items-center gap-1.5 lg:bg-white`,
    children: [
      El({
        element: "div",
        className:
          "bg-[#dc3545] p-2 rounded-md cursor-pointer border border-white",
        children: [
          El({
            element: "img",
            src: "../../../public/assets/bin.svg",
            className: "btn-delete",
            dataset: { id: obj.id },
          }),
        ],
      }),
      El({
        element: "div",
        className: "bg-[#0d6efd] p-2 rounded-md cursor-pointer",
        children: [
          El({
            element: "img",
            src: "../../../public/assets/pen.svg",
            className: "btn-pen",

            dataset: { id: obj.id },
          }),
        ],
      }),
      El({
        element: "div",
        className: "moduleP bg-[#6c757d] p-2 rounded-md cursor-pointer",
        children: [
          El({
            element: "img",
            src: "../../../public/assets/eye.svg",
            eventListener: [{ event: "click", callback: handelShowModal }],
            className: "btn-eye",
            dataset: { id: obj.id },
          }),
          taskDetail(obj.title, obj.Deadline, obj.description),
        ],
      }),
    ],
  });
}

function priorityBg(priority, arr) {
  let result;
  if (priority === 1) {
    result = arr[0].bgRed + " " + arr[0].bgTextWithe;
  }
  if (priority === -1) {
    result = arr[1].bgGray + " " + arr[1].bgTextBlack;
  }
  if (priority === 0) {
    result = arr[2].bgYellow + " " + arr[2].bgTextBorne;
  }
  return result;
}

function statsBg(stat, arr) {
  let result;
  if (stat === -1) {
    result = " " + arr[0].bgRed + " " + arr[0].bgTextWithe;
  }
  if (stat === 1) {
    result = " " + arr[3].bgGreen + " " + arr[3].bgTextGreen;
  }
  if (stat === 0) {
    result = " " + arr[2].bgYellow + " " + arr[2].bgTextBorne;
  }
  return result;
}
function handelBtnTask(e) {
  if (e.target.classList.contains("btn-delete")) {
    const id = Number(e.target.dataset.id);

    arrTasks = arrTasks.filter((item) => item.id !== id);
    console.log(arrTasks);
    createTasks();
  }
  if (e.target.classList.contains("btn-eye")) {
    const id = Number(e.target.dataset.id);
    let task = arrTasks.filter((item) => item.id === id);
    taskDetail();
  }
}
function taskDetail(title, date, detail) {
  return El({
    element: "div",
    className:
      "moduleC w-full h-screen bg-[#7926eda1] moduleC absolute top-0 left-0 hidden grid place-items-center z-50 ",
    children: [
      El({
        element: "div",
        className:
          "w-[90%] bg-[#f0f0f0] border-4 gap-2 overflow-x-scroll border-[#6200ea] h-[80%] relative rounded-md flex flex-col lg:p-10 p-3",
        children: [
          El({
            element: "div",
            className: "flex w-full text-black border-b p-2",
            children: [
              El({
                element: "div",
                className: "flex-1",
                children: [El({ element: "h2", innerText: title })],
              }),
              El({
                element: "div",
                className: "flex-1 text-black",
                children: [El({ element: "p",
                  className:"text-end sm:text-2xl text-md",
                  innerText: date })],
              }),
            ],
          }),
          El({ element: "p",
            className:"text-md text-black p-2"
            , innerText: detail }),
        ],
      }),
    ],
  });
}
