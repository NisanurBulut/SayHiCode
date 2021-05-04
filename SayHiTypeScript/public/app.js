var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// list template instance
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    var values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    if (type.value === "invoice") {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values)))();
    }
    list.render(doc, type.value, "end");
});
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var docOne = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { title: "Nisanur" },
};
var docThree = {
    uid: 3,
    resourceName: ResourceType.BOOK,
    data: "Gölge ve Kemik",
};
// tuples
var arr = ["Nisanur", 29, true];
arr[0] = false;
arr[1] = "Nisanur";
arr = [29, false, "Furkan"];
var tup = ["Nisanur", 29, true];
// tup[0]=false // error
