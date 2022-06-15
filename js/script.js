const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Create a Factory Function & Add Properties
const createPet = function (name, species) {
	const pet = {
		name: name,
		species: species,
		isTired: 5, //scale of 1-10 w/ 10 =most tired
		sleep: function () {
			console.log(`${this.name} needs a nap. Zzz...`);
			this.isTired = 1;
		},
		play: function () {
			if (this.isTired === 10) {
				console.log("Too tired to play.");
				this.sleep();
			} else {
				console.log(`Yaay, ${this.name} loves to play!`);
				this.isTired += 1;
			}
		}
	};
	return pet;
};

const sora = createPet("Sora", "farret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//console.log(createPet);
// clover.sleep();
// baxter.play();

// console.log(clover, baxter);

// Update Properties
clover.isTired = 8;
francine.isTired = 9;
// Create an Array of Objects
const allPets = [sora, clover, baxter, cleo, francine];

// console.log(allPets);
// Display Pets in the Browser
const showPets = function (petArray) {
	pets.innerHTML = "";
	for (let pet of petArray) {
		let status = "ready to play!";
		if (pet.isTired >= 7) {
			status = "sleeping";
		}
		const li = document.createElement("li");
		li.innerHTML = `<span  class = pet-name>${pet.name}</span>, the ${pet.species}, ${status}!`;
		pets.append(li);
	}
};
// Add Click Event
statusButton.addEventListener("click", function () {
	showPets(allPets);
});
