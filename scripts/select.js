var selects = [];
var selectsElements = [];
var gearSelectors = [];
var unitSelectors = [];
var gearSelectorIcon = document.getElementById('gear-selector-unit-icon');

var Select = function(element, imgPath, type, unitObject) {
	this.type = type;
	this.unitObject = unitObject;
	this.imgPath = imgPath;
	this.element = element;
	this.dropdown = element.getElementsByClassName("select-dropdown")[0];
	this.container = element.getElementsByClassName("select-selected")[0];
	this.selectedOption = this.container.getElementsByClassName("select-option")[0];
	this.optionsElements = this.dropdown.getElementsByClassName("select-option");
	this.searchBar = this.dropdown.getElementsByClassName("select-search")[0];

	selectsElements.push(this.dropdown);

	//Register events
	let that = this;
	this.container.onclick = function(event) {
		that.showDropdown();
		event.stopPropagation();
	};

	if(this.type == "gear") {
		this.category = undefined;
		this.gearId = undefined;
		this.gear = undefined;
		this.statsSelector = new StatsSelector(element.getElementsByClassName("stats-selector")[0], this.unitObject);

		this.cog = this.container.getElementsByClassName('cog')[0];
		this.cog.onclick = function(event) {
			that.statsSelector.show();
			hideAllDropdowns();
			event.stopPropagation();
		}
	}

	for(let i = 0 ; i < this.optionsElements.length ; i++) {
		let optionElement = this.optionsElements[i];
		let j = i;
		optionElement.onclick = function(event) {
			that.select(j);
			that.hideDropdown();
			event.stopPropagation();
		}
	}

	//Register search events
	this.searchBar.onkeyup = function(event) {
		that.search(event.target.value);
	};

	if(this.optionsElements.length > 0) {

		if(this.container.dataset.initialized == 0) {
			this.select(0);
		} else {
			var optionIndex = this.container.dataset.option;
			var option = this.optionsElements[optionIndex];
			if(option != undefined) {
				if(type == "unit") {
					this.unitId = option.dataset.unit;
					this.unit = units[this.unitId];
					this.unitObject.state.unit = optionIndex;
				} else if(type == "gear") {
					this.category = option.dataset.category;
					this.gearId = option.dataset.gear;
					this.gear = gear[this.category][this.gearId];

					this.unitObject.state.gear[this.category] = {id: parseInt(this.gearId), lvl: 0, stats: {}};
					this.statsSelector.category = this.category;

					this.statsSelector.gear = this.gear;
					this.statsSelector.loadExisting();
				}
			}
		}

	}

}

Select.prototype.updateOptions = function() {
	var that = this;
	this.optionsElements = this.dropdown.getElementsByClassName("select-option");
	for(let i = 0 ; i < this.optionsElements.length ; i++) {
		let optionElement = this.optionsElements[i];
		let j = i;
		optionElement.onclick = function(event) {
			that.select(j);
			that.hideDropdown();
			event.stopPropagation();
		}
	}
}

Select.prototype.search = function(search) {
	for(let i = 0 ; i < this.optionsElements.length ; i++) {
		let element = this.optionsElements[i];
		let name = element.getElementsByClassName('select-name')[0].textContent.toLowerCase();
		if(name.indexOf(search.toLowerCase()) != -1 || search.length == 0)
			element.style.display = "flex";
		else
			element.style.display = "none";
	}
}

Select.prototype.showDropdown = function() {

	hideAllDropdowns();
	hideAllStatSelectors();

	this.dropdown.style.display = "flex";
	this.searchBar.focus();
}

Select.prototype.hideDropdown = function() {
	this.dropdown.style.display = "none";
}

Select.prototype.select = function(optionIndex) {

	var option = this.optionsElements[optionIndex];
	if(option == undefined) return;
	let img;

	switch(this.type) {
		case "unit":
			this.unitId = option.dataset.unit;
			this.unit = units[this.unitId];
			img = this.unit["img"];
			this.unitObject.updateUpgrades(this.unit);
			this.unitObject.updateDefaultStats(this.unit);
			this.unitObject.updateGearSelectors(this.unit);
			this.unitObject.resetGear();

			this.unitObject.state.unit = optionIndex;
			break;
		case "gear":
			if(option != undefined) {
				this.category = option.dataset.category;
				this.gearId = option.dataset.gear;
				this.gear = gear[this.category][this.gearId];

				if(this.element.style.display == "inline-block")
					this.unitObject.state.gear[this.category] = {id: parseInt(this.gearId), lvl: 0, stats: {}};
				this.statsSelector.category = this.category;

				this.statsSelector.loadGear(this.gear);
				img = this.gear["img"];
			}
			break;
	}

	if(this.type == "unit") {
		this.selectedOption.innerHTML = option.innerHTML;
		this.unitObject.gearSelectorIcon.src = this.imgPath + img;
	} else if(this.type == "gear") {
		this.selectedOption.getElementsByClassName('gear-select-img')[0].src = this.imgPath + img;
	}

	this.container.dataset.option = optionIndex;
	this.container.dataset.initialized = 1;

	this.unitObject.updateStats();
	updateComparison("all");
}

function hideAllDropdowns() {
	for(let i = 0 ; i < selects.length ; i++)
		selects[i].hideDropdown();
}

function registerHideListener() {
	document.addEventListener('click', function(event) {
		if (selectsElements.indexOf(event.target) != 1 && !event.target.classList.contains('select-search'))
			hideAllDropdowns();
	});
}

registerHideListener();
