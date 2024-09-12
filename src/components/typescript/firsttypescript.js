var num = 123;
var str = "this is a string type";
console.log(num, str);
var strarr = ["77", "88"];
strarr.push("string");
console.log(strarr);
//there is a special type of array which accepts specific type for each element in the array
var typedarrortuple = ["string", true, 78];
typedarrortuple = ["updatedstring", false, 50];
//it will check order also how we can declared in that way only we have to initialize.
console.log(typedarrortuple);
//if it is readonly tuple it will not accept.
// typedarrortuple.push("adding extra it will accept because whatever declared that places only have strong typing")
console.log(typedarrortuple);
var typeobj = {
    num: 123,
    str: "str",
    bool: true
};
console.log(typeobj.num);
//enums
//if not given any value for the elements in enum type it will automatically give from 0 and increment by 1 so on
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
console.log(CardinalDirections.North, CardinalDirections.West);
//if we given any number to starting then from that number it will increment and assign to the next elements
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = -1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 0] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 1] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 2] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
;
console.log(CardinalDirections2.North, CardinalDirections2.West);
//and also we can assign fully to do not increment
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1["North"] = "North";
    CardinalDirections1["East"] = "East";
    CardinalDirections1["South"] = "South";
    CardinalDirections1["West"] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
;
console.log(CardinalDirections1.North);
