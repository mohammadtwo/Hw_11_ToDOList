import { El } from "../../utils/El";
const arrColor = [
  { bgRed: "bg-[#dc3545]", bgTextWithe: "text-[#fcf8f7]" },
  { bgGray: "bg-[#ebebeb]", bgTextBlack: "text-[#28323f]" },
  { bgYellow: "bg-[#ffc107]", bgTextBorne: "text-[#2c2401]" },
  { bgGreen: "bg-[#2e7d32]", bgTextGreen: "text-[#f6f7eb]" },
];
let arrData = JSON.parse(localStorage.getItem("data"));
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
export function Main(){
  return El({element:"div",
    id:"task-container",
  })

}
export function createTasks() {
const taskContainer = document.getElementById("task-container");
  taskContainer.innerText="loading...";

  let result= El({
    element: "div",
    eventListener: [
      {
        event: "click",
        callback:handelBtnTask,
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
  taskContainer.innerHTML=""
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
    createAction(item.stats, item.id),
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
function createAction(stat, id1) {
  return El({
    element: "div",
    className: `flex ${statsBg(
      stat,
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
            className:"btn-delete",
            dataset: {id:id1},
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
            className:"btn-pen",
            dataset: {id:id1},
          }),
        ],
      }),
      El({
        element: "div",
        className: "bg-[#6c757d] p-2 rounded-md cursor-pointer",
        children: [
          El({
            element: "img",
            src: "../../../public/assets/eye.svg",
            className:"btn-eye",
            dataset:{id:id1}
          }),
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
function handelBtnTask(e){
   if (e.target.classList.contains("btn-delete")) {
     const id = Number(e.target.dataset.id)
   
     arrTasks = arrTasks.filter((item) => item.id !== id);
     createTasks()
   }
}