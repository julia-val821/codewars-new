//https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript

function getFirstPython(list) {
  let person = list.filter(el => el.language === 'Python')
  return person.length !== 0 ? `${person[0].firstName}, ${person[0].country}` : 'There will be no Python developers';
}
