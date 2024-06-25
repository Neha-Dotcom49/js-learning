const map = new Map();
map.set("rollNumber", 10);
map.set("city", "LA");
map.set("age", 22);
map.set("rollNumber", 30);
map.set("luckyNum", 22);
console.log(map);

console.log(map.get("city"));
console.log(map.get("luckyNum"));

console.log(map.has("age"));
console.log(map.size);
console.log(map.keys());
console.log(map.values());

console.log(`Traversing map`);
for (const keyVal of map) {
    console.log(keyVal[0], keyVal[1]);
}