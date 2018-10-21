var unitContainer = document.getElementById("unit-container");

function duplicateUnitDOM(unit) {
	let div = document.createElement("div");
	for(let i = 0 ; i < unit.classList.length ; i++)
		div.classList.add(unit.classList.item(i));
	div.innerHTML = unit.innerHTML;

	unit.getElementsByClassName("compare-button")[0].remove();
	div.getElementsByClassName("compare-button")[0].addEventListener("click", compareClicked);

	div.getElementsByClassName("select-search")[0].value = unit.getElementsByClassName("select-search")[0].value;
	return div;
}

function compareClicked(event) {
	let unit = event.target.closest(".unit");
	let duplicate = duplicateUnitDOM(unit);
	let object = new UnitObject(duplicate, true);

	unitContainer.appendChild(duplicate);
	//object.updateUpgrades(object.unitSelect.unit);
	unitObjects.push(object);
}

function initCompareButtons() {
	let buttons = document.getElementsByClassName("compare-button");
	for(let i = 0 ; i < buttons.length ; i++)
		buttons[i].addEventListener("click", compareClicked);
}

initCompareButtons();
