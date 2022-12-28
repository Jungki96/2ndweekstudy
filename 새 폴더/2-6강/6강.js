//요소 (element)
const array = [100, 20, '문자열', true, function () {} , () => {}]

//속성 (property)
//메서드(method)
const dog = {
    name: '구름',
    age: 7,
    bark: function() {
        console.log(`${this.name}이/가 짖습니다!`)
        console.log(`${name}이/가 짖습니다!`)  // this를 지정하지않으면 값을 못알아 듣는다.
    },
    sleep: function() {
        console.log(`${this.name}이/가 잡니다!`)
    }
}
dog.bark()
dog.sleep()

//객체에 동적으로 속성 추가하기
const pet = {
    name: '구름',
    age: 8
}
//객체의 키와 값을 동적으로 생성한다.
pet.color = 'brown'
//객체의 키와 값을 동적으로 제거한다.
delete pet['color']                                                     //속성접근자 괄호 표기법
//출력
console.log(pet)                                                     // 원시자료


const list = {
    title : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}
console.log(list)

// 객체 기본값을 지정하는 내용!
const test = function (name, age, color) {
    return `${name} : ${age} : ${color}`
}
console.log(test('구름',7,'갈색'))   // 보다는 밑에 작성된것을 선호하는 편

const test = function (object) {
    return `${object.name} : ${object.age} : ${object.color} : ${object.status}`
}

console.log(test({
    name: '구름, 하늘',
    age: 7,
    color:'갈색',
    status: '이상 없음'
}))                                         //육안으로 보기 쉬워야 오류 찾기가 쉽다~!


const object = {
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
}

object.name = object.name !== undefined ? object.name : '제목 미정'
object.author = object.author !== undefined ? object.author : '저자 미상'

console.log(JSON.stringify(object, null, 2))