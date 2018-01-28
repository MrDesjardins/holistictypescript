interface SuperHero { }
interface Batman extends SuperHero { }
interface SuperMan extends SuperHero { }

function createSuperHero(name: "batman"): Batman;
function createSuperHero(name: "superman"): SuperMan;
function createSuperHero(name: string): SuperHero {
    if (name === "batman") { return {}; }
    else if (name === "superman") { return {}; }
    return {};
}