const WHO = ['The dog','My grandma','His turtle','My bird']
const ACTION = ['ate','peed','crushed','broke']
const WHAT = ['my homework', 'the keys', 'the car']
const WHEN = ['before the class','right on time','when I finished','during my lunch','while I was praying']

const Q = ($query, $all = false, $node = document) => $all ? [...$node.querySelectorAll($query)] : $node.querySelector($query)

const getRandomItemFrom = (arr) => arr[Math.floor(Math.random() * (arr.length))]

const on = ($eventName, $cb, $el = window) => $el.addEventListener($eventName, $cb)

const excuseGenerator = () => `${getRandomItemFrom(WHO)} ${getRandomItemFrom(ACTION)} ${getRandomItemFrom(WHAT)} ${getRandomItemFrom(WHEN)}`

const writeExcuse = () => {
  const excuse = Q('#excuse')
  excuse.innerHTML = excuseGenerator()
}

on('load', writeExcuse)
