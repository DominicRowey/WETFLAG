

function updateWETFLAG()
{
    //call each of the functions to calculate WetFLAG values
    // and updates the page

    var age = document.getElementById("age").textContent;
    var weight = document.getElementById("weight").textContent;
    if (weight == "") {
      weight = getWeight(age);
    }

    document.getElementById("weight").textContent = weight;
    document.getElementById("energy").textContent = getEnergy(weight);
    document.getElementById("tube").textContent = getTube(age);
    document.getElementById("fluids").textContent = getFluids(weight);
    document.getElementById("lorazepam").textContent = getLorazepam(weight);
    document.getElementById("adrenaline").textContent = getAdrenaline(weight);
    document.getElementById("glucose").textContent = getGlucose(weight);
}

// using the ( age + 4 ) * 2 algorithm for now (ie the simplest version)
function getWeight(age) {
  var weight;

  if (age == 0) {
    weight = 3.5;
    return weight;
  }

  else if (age < 1) {
    age=age*12 //to age in months
    weight = (0.5 * age) + 4;
    return weight;
  }

  else if (age <= 5) {
    weight = (2 * age) + 8;
  }
  else {
    weight = (3 * age) + 7;
  }
  return Math.round(weight);
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


function getEnergy(weight)
{
    //energy in
    var energy = Math.ceil( 4*weight );
    return energy;
}

//age must be in years for this
function getTube(age)
{
    //in mm, needs to round up to nearest 0.5
    // this is maths for uncuffed tube
    var tube = (age / 4) + 4;

    if ( tube % 0.5 != 0 ) //hack-y way to round up to nearest 0.5
    {
        tube = Math.ceil( tube * 2 ) / 2;
    }
    return tube;
}

function getFluids(weight)
{
    //returns in ml
    var fluids = Math.ceil( 20 * weight);
    return fluids;
}

function getLorazepam(weight)
{
    //returns in mg
    var lorazepam = round(  0.1 * weight, 1);

    return lorazepam;
}

function getAdrenaline(weight){
    //returns in ml for a 1:10,000 solution
    var adrenaline = round( 0.1 * weight, 1);
    return adrenaline;
}

function getGlucose(weight){
    //returns in ml
    var glucose = Math.ceil(weight * 2);
    return glucose;
}
