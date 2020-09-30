const Q = ($query, $all = false, $node = document) => $all ? [...$node.querySelectorAll($query)] : $node.querySelector($query)

const on = ($eventName, $cb, $el = window) => $el.addEventListener($eventName, $cb)

const toggleClass = ($el, className) => $el.classList.toggle(className)

const range = (from, to) => [...Array(to + 1).keys()].slice(from)

const exclude = (arr, items) => {
  let mutableArr = [...arr]
  let indexToExclude = 0
  for (let item of items) {
    indexToExclude = mutableArr.indexOf(item)
    if (indexToExclude === -1) return arr
    mutableArr = [...mutableArr.slice(0, indexToExclude), ...mutableArr.slice(indexToExclude + 1)]
  }
  return mutableArr
}

const getRandomItemFrom = (arr) => arr[Math.floor(Math.random() * (arr.length))]

const cardDeck = exclude(range(137, 198), [148, 151, 152, 164, 167, 168, 180, 183, 184, 196])
  .map(card => ({ colorClass: (card >= 153 && card <= 182) ? 'rojo' : 'negro', symbol: `&#127${card};` }))

let cardsToShow = []

do {
  cardsToShow = new Set([getRandomItemFrom(cardDeck), getRandomItemFrom(cardDeck), getRandomItemFrom(cardDeck)])
} while (cardsToShow.size < 3)

cardsToShow = [...cardsToShow]

const scenes = Q('.scene', true)

scenes.forEach((scene, index) => {
  scene.innerHTML = `
    <div class="card ${cardsToShow[index].colorClass}">
      <div class="card-face card--front">
        &#127136;
      </div>
      <div class="card-face card--back">
        ${cardsToShow[index].symbol}
      </div>
    </div>
  `

  on('click', () => {
    toggleClass(scene.firstChild.nextElementSibling, 'is-flipped')
  }, scene.firstChild.nextElementSibling)
})
