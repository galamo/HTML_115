function init() {
  const p = document.querySelector("#p1");
  for (let index = 0; index < 20; index++) {
    const newP = p.cloneNode(true);
    newP.id = `p-${Math.ceil(Math.random() * 999)}`;
    const board = document.querySelector("#board");
    board.appendChild(newP);
  }
}

init();

function increaseAmount() {
  const amount = getCardAmount();
  const currentValue = parseInt(amount.innerText);
  amount.innerText = currentValue + 1;
}

function decreaseAmount() {
  const amount = getCardAmount();
  const currentValue = parseInt(amount.innerText);
  if (currentValue === 0) return;
  amount.innerText = currentValue - 1;
}

function getCardAmount() {
  const p1 = document.getElementById("p1");
  const amount = p1.querySelector("#amount");
  return amount;
}
