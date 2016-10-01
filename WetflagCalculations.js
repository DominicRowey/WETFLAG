

function updateWETFLAG()
{
    //call each of the functions to calculate WetFLAG values
    // and updates the page

    var weight = document.getElementById("weight").textContent;
    var age = document.getElementById("age").textContent;

    document.getElementById("energy").textContent = getEnergy(weight);

    document.getElementById("tube").textContent = getTube(age);

    document.getElementById("fluids").textContent = getFluids(weight);
    document.getElementById("lorazepam").textContent = round(getLorazepam(weight),2);
    document.getElementById("adrenaline").textContent = round(getAdrenaline(weight),2);
    document.getElementById("glucose").textContent = getGlucose(weight);
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function getEnergy(weight)
{
    //energy in 
    var energy = 4*weight;
    return energy;
}

//age must be in years for this
function getTube(age)
{
    //in mm, needs to round up to nearest 0.5
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
    var fluids = 20 * weight;
    return fluids;
}

function getLorazepam(weight)
{
    //returns in mg
    var lorazepam = 0.1 * weight;
    return lorazepam;
}

function getAdrenaline(weight){
    //returns in ml for a 1:10,000 solution
    var adrenaline = 0.1 * weight;
    return adrenaline;
}

function getGlucose(weight){
    //returns in ml
    var glucose = weight * 2;
    return glucose;
}