let  pokemonList = [

  {name: "Bulbasor", height: 0.7, types: "grass" },
  
  {name: "Charizard", height: 1.7, types: "fire" },

  {name: "Squirtle", height: 1, types: "water" }

];

for(let i= 0; i <= pokemonList.length; i++){

  document.writeln(pokemonList[i].name);
  document.writeln(pokemonList[i].height);
  document.writeln(pokemonList[i].types);

  if(pokemonList[i].height >= 1.1){

    document.writeln("Wow charzard is big");

  }else{

    document.writeln("god these are tiny");

  }

}
