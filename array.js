let num = [11, 12, 13, 114, 15, 16]
console.log(num[3])

for (let i = 0; i < num.length; i++) {
    console.log(i)
    console.log(num[i])
}
console.log('---------------')
let city = ["mumbai", "pune", "chandrapur", "nagpur"]
//console.log(city[0])

for (let i = 0; i < city.length; i++) {
    console.log(i)
    console.log(city[i])
}

console.log('------push---------')
let b = city.push("wardha")
console.log(city)


console.log('------unshift---------')
let c = city.unshift("jam")
console.log(city)


console.log('------pop---------')
let d = city.pop("")
console.log(city)

console.log('------shift---------')
let e = city.shift("")
console.log(city)


console.log('------includes---------')
let f = city.includes("nagpur")
console.log(f)
let g = city.includes("jaipur")
console.log(g)


console.log('------Indexof---------')
let h = city.indexOf("pune")
console.log(h)
let i = city.indexOf("wardha")
console.log(i)

console.log("--------sort----------")
let names = ["sumit", "arna", "arika", "gauri", "dhanashree"]
let j = names.sort()
console.log(j)


console.log('------reverse---------')
let k = names.reverse()
console.log(k)


console.log('------flat---------')
let numbers = [[11, 22, 33, 44], [22, 44, 66, 88]]
console.log(numbers[0])
console.log(numbers[0][3])

let l = numbers.flat()
console.log(l)


console.log('------slice---------')
//         0   1    2   3   4   5
let marks = [35, 36, 37, 38, 39, 40]
//         -6  -5  -4  -3  -2  -1

let m = marks.slice(1)
let n = marks.slice(-5, -1)
let o = marks.slice(2, 5)

console.log(m)
console.log(n)
console.log(o)


console.log('--------map--------')

console.log('-------program one---------')

let ages = [22, 25, 27, 29, 30]
console.log(ages[3])
let birthyear = []

for (let i = 0; i < ages.length; i++) {
    let year = 2022 - ages[i]
    birthyear.push(year)
}

console.log(birthyear)

console.log('--------map--------')

console.log('-------program one---------')
let p = ages.map(function (el, index, arr) {
    //console.log(el,index,arr)
    return 2022 - el
})

console.log(p)

console.log('-------program two---------')

let q = [11, 33, 55, 77, 99]

let r = q.map(function (el, index, arr) {
    return el + 2
})

console.log(r)


console.log('-------program three---------')

let s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let t = s.map(function (el, index, arr) {
    return el * 5
}, 0)

console.log(t)


console.log('-------filter---------')

console.log('------program one-----')

let numbers1 = [22, 33, 44, 55, 66, 77, 88, 90]
let above55 = []
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > 55) {
        above55.push(numbers1[i])
    }
}

console.log(above55)

console.log('-------program one---------')

let u = numbers1.filter(function (el, index, arr) {

    //console.log(el,index,arr)
    return el > 50

})

console.log(u)


console.log('-------program two---------')

let amount = [200, 500, -24, -33, -300, 500, 55, 88, 33 - 47, -457]

let deposit = amount.filter(function (el, index, arr) {
    return el > 0
})

let withdrawl = amount.filter(function (el, index, arr) {
    return el < 0
})

console.log(deposit)
console.log(withdrawl)



console.log('-------reduce---------')

console.log('-------program one---------')

let marks1 = [37, 38, 39, 40]
let total = 0

for (let i = 0; i < marks1.length; i++) {
    //console.log(marks1[i])
    total = total + marks1[i]
}
console.log(total)


console.log('-------program one---------')

let v = marks1.reduce(function (acc, el, index, arr) {
    return acc + el
}, 0)

console.log(v)


console.log('-------program two---------')
let amount1 = [200, 500, -24, -33, -300, 500, 55, 88, 33 - 47, -457]

let deposit1 = amount.filter(function (el, index, arr) {
    return el > 0
})

let withdrawl1 = amount.filter(function (el, index, arr) {
    return el < 0
})

console.log(deposit1)
console.log(withdrawl1)


let totalD = deposit1.reduce(function (acc, el, index, arr) {
    return acc + el

}, 0)
console.log(totalD)

let totalW = withdrawl1.reduce(function (acc, el, index, arr) {
    return acc + el

}, 0)
console.log(totalW)


console.log('------forEach--------')

let names1 = ["arna", "arika", "gauri", "dhanshree", "sumit"]

for (let i = 0; i < names1.length; i++) {
   console.log("welcome"+names[i])
}

console.log('------forEach--------')
names1.forEach(function(el,index,arr){
    console.log("welcome"+el)
})


console.log('------every--------')

let marks2=[11,22,33,44,55,66,77]

let x=marks2.every(function(el,index,arr){
    return el > 24

})

console.log(x)


console.log('------Some--------')


let y=marks2.some(function(el,index,arr){
    return el > 24

})

console.log(y)

console.log('-------find-------')

let z=marks2.find(function(el,index,arr){
    return el > 22

})
console.log(z)



console.log('-------findIndex-------')

let aa=marks2.findIndex(function(el,index,arr){
    return el>22
})

console.log(aa)


console.log('-------concat-------')


let bb=[2,3,4,5,6]
let cc=[33,24,42,54,75]

let dd=bb.concat(cc)
let ee=cc.concat(bb)

console.log(dd)
console.log(ee)


console.log('-------join--------')
let info=["gauri","kanhe","6476761602"]
let ff=info.join("")
console.log(ff)


console.log('-------splice--------')

let names2=["arna","arika","sumit"]
names2.splice(2,3)
console.log(names2)

console.log('-------fill--------')

names2.fill(2,1)
console.log(names2)






