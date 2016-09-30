// You will use this Object for the answers
// DO NOT CHANGE THIS SECTION
var adventuringParty = {
    wizard: {
        name: "Gandalf",
        class: "Wizard",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1}
        ]
    },
    warrior: {
        name: "Conan",
        class: "Warrior",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            { name: "Bow", arrow: [
                { name: "+1 Arrows of Punishing", damage: 40, qty: 3},
                { name: "Wooden Arrows", damage: 10, qty: 4}
            ]}
        ]
    }
}
var warrior = adventuringParty.warrior;
var wizard = adventuringParty.wizard;
function listCharacters(companions){
    console.log("Characters:")
    for(obj in adventuringParty) {
        console.log(" * " + adventuringParty[obj].name);
    
} };
listCharacters(adventuringParty);
function listWeapons(character) {
    console.log("Listing weapons for " + character.name + ":");
    for(i in character.weapons) {
        var weapon = character.weapons[i];
        console.log(" * " + weapon.name);
    }
}
listWeapons(wizard);
listWeapons(warrior);

function weaponAttack(character, weaponName) {
    console.log(character.name + " attacks with his " + weaponName);
    var maxDamage;
    for(i in character.weapons) {
        var weapon = character.weapons[i];
        if(weapon.name == weaponName) {
            maxDamage = weapon.damage;
        }
    }
    console.log("He hits for " + Math.round( Math.random() * maxDamage ) + " damage");
}
weaponAttack(warrior, "Axe")
weaponAttack(wizard, "Staff"); 