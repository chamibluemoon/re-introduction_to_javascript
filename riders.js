// riders
/**
 * Hero class
 */
function Hero() {
    this.name = 'Hero';
    console.log('DEBUG Hero instantiated');
}

/**
 * self-introduction method
 */
Hero.prototype.logs = function() {
    console.log('My name is ' + this.name);
};

Hero.prototype.transform = function() {
    console.log('DEBUG ' + this.name + ' transform!!');
};

/**
 * Kamen Rider
 */
function Rider() {
    this.belt = 'Rider belt';
    console.log('DEBUG Rider instantiated');
}
Rider.prototype = new Hero();
Rider.prototype.name = 'Rider';

/**
 * @override
 */
Rider.prototype.transform = function() {
    console.log('DEBUG ' + this.name + ' transform!!');
    console.log('My belt is ' + this.belt);
};

/**
 * Foze
 */
function Foze() {
    console.log('DEBUG Foze instantiated');
}
Foze.prototype = new Rider();
Foze.prototype.name = 'Foze';
Foze.prototype.belt = 'Foze belt';

/**
 * @override
 */
Foze.prototype.transform = function() {
    console.log('DEBUG ' + this.name + ' transform!!');
    console.log('DEBUG My belt is ' + this.belt);
    console.log('here come cosmic world!!');
};

var foze = new Foze();
foze.logs();
foze.transform();

