import { El } from "../../utils/El";
const arrColor = [
  { bgRed: "bg-[#dc3545]", bgTextWithe: "text-[#fcf8f7]" },
  { bgGray: "bg-[#ebebeb]", bgTextBlack: "text-[#28323f]" },
  { bgYellow: "bg-[#ffc107]", bgTextBorne: "text-[#2c2401]" },
  { bgGreen: "bg-[#2e7d32]", bgTextGreen: "text-[#f6f7eb]" },
];
let arrTasks = [
  {
    id: 1,
    title: "walk",
    description: "walking with a dog",
    Deadline: "1998/09/02",
    priority: 0,
    stats: 1,
  },
  {
    id: 2,
    title: "walk",
    description: "walking with a dog",
    Deadline: "1998/09/02",
    priority: 0,
    stats: 1,
  },
  {
    id: 3,
    title: "walk",
    description: "walking with a dog",
    Deadline: "1998/09/02",
    priority: -1,
    stats: -1,
  },
  {
    id: 4,
    title: "walk",
    description: "walking with a dog",
    Deadline: "1998/09/02",
    priority:1,
    stats: 0,
  },
];
// function 
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
      ...ShowTasks(arrTasks),
    ],
  });
}

function ShowTasks(arr) {
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
          className: ` w-fit h-fit lg:bg-white lg:text-black ${priorityBg(
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
      className: `p-5 sm:grid lg:bg-white place-items-center ${statsBg(item.stats,arrColor)} hidden`,
      children: [
        El({
          element: "div",
          className: "lg:text-black border-2 p-2 border-[#5599fe] rounded-4xl",
          innerText: item.Deadline,
        }),
      ],
    }),
        createAction(item.stats),
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
function createAction(stat) {

    return El({
    element: "div",
    className: `flex ${statsBg(stat,arrColor)} justify-center items-center gap-1.5 lg:bg-white`,
    children: [
      El({
        element: "div",
        className: "bg-[#dc3545] p-2 rounded-md cursor-pointer border border-white",
        children: [
          El({ element: "img", src: "../../../public/assets/bin.svg" }),
        ],
      }),
      El({
        element: "div",
        className: "bg-[#0d6efd] p-2 rounded-md cursor-pointer",
        children: [
          El({ element: "img", src: "../../../public/assets/pen.svg" }),
        ],
      }),
      El({
        element: "div",
        className: "bg-[#6c757d] p-2 rounded-md cursor-pointer",
        children: [
          El({ element: "img", src: "../../../public/assets/eye.svg" }),
        ],
      }),
    ]
  })}



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
    result =" "+ arr[0].bgRed + " " + arr[0].bgTextWithe;
  }
  if (stat === 1) {
    result = " "+arr[3].bgGreen + " " + arr[3].bgTextGreen;
  }
  if (stat === 0) {
    result = " "+arr[2].bgYellow + " " + arr[2].bgTextBorne;
  }
  return result;
}
