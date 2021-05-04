import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.AUTHOR,
  data: { title: "Nisanur" },
};

const docThree: Resource<string> = {
  uid: 3,
  resourceName: ResourceType.BOOK,
  data: "Gölge ve Kemik",
};

// tuples

let arr = ["Nisanur", 29, true];
arr[0] = false;
arr[1] = "Nisanur";
arr = [29, false, "Furkan"];

let tup: [string, number, boolean] = ["Nisanur", 29, true];

// tup[0]=false // error
