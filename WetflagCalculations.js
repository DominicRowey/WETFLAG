

function updateWETFLAG(weight, age)
{
    var energy = getEnergy(weight);
    var tube = getTube(age);
    var fluids = getFluids(weight);
    var lorazepam = getLorazepam(weight);
    var adrenaline = getAdrenaline(weight);
    var glucose = getGlucose(weight);
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