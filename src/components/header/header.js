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
            className: "sm:text-xl flex-1",
            innerText: "My To-DO Tasks",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-end gap-2 flex-1",
        children: [
          El({
            element: "div",
            className: "relative moduleP sm:hidden",
            children: [
              El({
                element: "img",
                src: "../../../public/assets/search.svg",
                alt: "search",
                className: "sm:hidden",
                eventListener: [
                  {
                    event: "click",
                    callback: showModuleSearch,
                  },
                ],
              }),
              El({
                element: "div",
                className:
                  "moduleC w-50  rounded-md h-12 absolute hidden top-full right-0 bg-[#6200ea] grid place-items-center   ",
                children: [
                  El({
                    element: "input",
                    className:
                      "bg-[#7926ed] shadow-2xl text-white p-1 outline-none  rounded-md",
                    type: "text",
                    placeholder: "search",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "relative hidden sm:inline",

            children: [
              El({
                element: "input",
                placeholder: "search",
                className:
                  "bg-[#7926ed]  pl-8 p-1 outline-none text-white relative rounded-md",
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
            className: "relative moduleP",

            children: [
              El({
                element: "img",
                src: "../../../public/assets/filter.svg",
                alt: "filter",
                className: "",
                eventListener: [
                  {
                    event: "click",
                    callback: showModuleSelectBox,
                  },
                ],
              }),
              El({
                element: "div",
                className:
                  "absolute moduleC h-50 w-[250px] bg-[#6200ea] hidden  grid place-items-center overflow-auto gap-2 p-4  overflow-x-scroll top-full right-0 rounded-b-xl lg:w-[500px]",
                children: arrFilter.map((item) => {
                  return El({
                    element: "div",
                    value: `${item}`,
                    innerText: item,

                    eventListener: [
                      {
                        event: "click",
                        callback: filter,
                      },
                    ],
                    className:
                      "text-center selectorFilter cursor-pointer p-2 w-full bg-[#7926ed] text-white rounded-md",
                  });
                }),
              }),
            ],
          }),
          El({
            element: "div",
            className: "moduleP",
            children: [
              El({
                element: "img",
                src: "../../../public/assets/plus.svg",
                alt: "plus",
                eventListener: [{ event: "click", callback: showModuleInput }],
              }),
              mould(),
            ],
          }),
        ],
      }),
    ],
  });
}
function mould() {
  return El({
    element: "div",
    className:
      "moduleC w-full h-screen bg-[#7926eda1] moduleC absolute top-0 left-0 hidden grid place-items-center ",
    children: [
      El({
        element: "form",
        id: "form",
        className:
          "w-[90%] bg-[#f0f0f0] border-4 gap-2 overflow-x-scroll border-[#6200ea] h-[80%] relative rounded-md flex flex-col  p-3",
        children: [
          El({
            element: "div",
            className:
              "w-full bg-[#6200ea] absolute top-0 right-0 left-0 p-2 text-white text-center",
            innerText: "Add new task",
          }),
          El({
            element: "input",
            type: "text",
            name: "title",
            className:
              "bg-[#7926eda5] text-white rounded-md mt-8 outline-none p-3",
            placeholder: "title",
          }),
          El({
            element: "div",
            className:
              "flex flex-col p-3 sm:flex-row sm:justify-around bg-[#7926eda5]  rounded-md items-center justify-center",
            children: [
              El({
                element: "div",
                children: [
                  El({
                    element: "input",
                    name: "date",
                    type: "date",
                    className: "bg-[#7926eda5] text-white p-2 w-full",
                  }),
                ],
              }),
              El({
                element: "div",
                innerText: "priority",
                className:
                  "grid m-2 text-center bg-[#7926eda5] text-white rounded-md ",
                children: [
                  El({
                    element: "select",
                    name: "priority",
                    className:
                      "mt-2 bg-[#7926eda5] rounded-md p-2 outline-none",
                    children: [
                      El({ element: "option", innerText: "High" }),
                      El({
                        element: "option",
                        innerText: "Medium",
                      }),
                      El({ element: "option", innerText: "Low" }),
                    ],
                  }),
                ],
              }),
              El({
                element: "div",
                innerText: "status",
                className:
                  "grid m-2 text-center bg-[#7926eda5] text-white rounded-md",
                children: [
                  El({
                    element: "select",
                    name: "stats",
                    eventListener: [
                      {
                        event: "click",
                        callback: filter,
                      },
                    ],
                    className:
                      "mt-2 bg-[#7926eda5] rounded-md p-2 outline-none ",
                    children: [
                      El({
                        element: "option",
                        innerText: "ToDo",
                        value: "ToDo",
                      }),
                      El({
                        element: "option",
                        innerText: "Doing",
                        value: "Doing",
                      }),
                      El({
                        element: "option",
                        innerText: "Done",
                        value: "Done",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex-1 w-full  flex flex-col gap-2 items-center",
            children: [
              El({
                element: "textarea",
                name: "description",
                className:
                  " w-full p-3 bg-[#7926eda5] rounded-md h-full outline-none text-white",
                placeholder: "description",
              }),
              El({
                element: "button",
                innerText: "submit",
                type: "submit",
                className:
                  "p-2 bg-[#7926ed] rounded-md text-2xl text-white cursor-pointer w-full max-w-[70%]",
                eventListener:[{
                  event:"click",
                  callback:handleSubmit
                }]
              }),
            ],
          }),
        ],
      }),
    ],
  });
  
}
function showModuleSelectBox(e){
  e.stopPropagation();
  const parent = e.target.closest(".moduleP");
  const child = parent.querySelector(".moduleC");

  child.classList.toggle("hidden"); 

  const onClickOutside = (ev) => {
    if (child.contains(ev.target) || !parent.contains(ev.target)) {
      child.classList.add("hidden");
      document.removeEventListener("click", onClickOutside);
    }
  };


    document.addEventListener("click", onClickOutside);
  
}
function showModuleSearch(e){
    e.stopPropagation();
  const parent=e.target.closest(".moduleP")
  const child=parent.querySelector(".moduleC")
  child.classList.toggle("hidden")
  const onClickOutside=(ev)=>{
    if(!child.contains(ev.target)){
      child.classList.add("hidden")
      document.removeEventListener("click",onClickOutside);
    }
  }

document.addEventListener("click",onClickOutside)
  
}

function showModuleInput(e){
  e.stopPropagation()
  const parent=e.target.closest(".moduleP")
  const child=parent.querySelector(".moduleC")
  child.classList.remove("hidden")
  document.body.classList.add("overflow-hidden")
const removeModule=(ev)=>{
 if (ev.target.classList.contains("moduleC")) {
   document.body.classList.remove("overflow-hidden");
   child.classList.add("hidden");
   parent.removeEventListener("click", removeModule);
 }
  
}
parent.addEventListener("click",removeModule)
}





function filter(e){
  const select=e.target
  let selectValue= select.value

}




function handleSubmit(e) {
  e.preventDefault();

  const formEl = e.target.closest('#form'); // مطمئن باشیم واقعا فرمِ فعلیه
  const formData = new FormData(formEl);
  const entries = Object.fromEntries(formData.entries());
  console.log(entries);

  // validation
  for (const [key, val] of Object.entries(entries)) {
    if (!val.trim()) {
      alert(`فیلد ${key} نباید خالی باشد!`);
      return;
    }
  }
  }