let  pokemonList = [

 {
  name: "Bulbasor",
  height: 0.7,
  type: ["grass"]
},
  
  {
  name: "Charizard",
  height: 1.7,
  type: ["fire", "flying"]
},

  {
  name: "Squirtle",
  height: 1,
  type: ["water"]
},
];

function Bulbasor(pokemon){

  return pokemon.name = "Bulbasor" || "Charzard"|| "Squirtal";
  return pokemon.type = 'grass' ||  "fire" || "water";
  return pokemon.height =  "0.7" || "1.7" || "0.5";

}
function Charizard(pokemon){

  return pokemon.name = "Squirtal";
  return pokemon.type = "water";
  return pokemon.height = "0.5";

}
function Squirtal(pokemon){

  return pokemon.name =  "Charzard";
  return pokemon.type = "fire" ;
  return pokemon.height = "1.7";

}
function findHeight(pokemon){

  return pokemon.height = "1.0";

}
for(let i = 0; i <= pokemonList.length; i++)[

  document.writeln(pokemonList.find(Bulbasor).name),
  document.writeln(pokemonList.find(Bulbasor).height),
  document.writeln(pokemonList.find(Bulbasor).type),
  document.writeln(pokemonList.find(Squirtal).name),
  document.writeln(pokemonList.find(Bulbasor).height),
  document.writeln(pokemonList.find(Bulbasor).type),
  document.writeln(pokemonList.find(Charizard).name),
  document.writeln(pokemonList.find(Charizard).height),
  document.writeln(pokemonList.find(Charizard).type),
  

]
if (pokemonList.find(findHeight) .height >= 1.0 && pokemonList.find(Charizard) .name){
   document.writeln("so big");
} else {
    document.writeln("so small")
}