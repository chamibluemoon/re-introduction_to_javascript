
/**
 * Hero class
 */
function Hero() {
    this.name = 'Hero';
    console.log('Hero instantiated');
}

/**
 * self-introduction method
 */
Hero.prototype.logs = function() {
    console.log('My name is ' + this.name);
};

/**
 * Kamen Rider Foze
 */
function Foze() {
    this.belt = 'foze belt';
    console.log('Foze instantiated');
}
Foze.prototype = new Hero();
Foze.prototype.name = 'Foze';

/**
 * @override
 */
Foze.prototype.logs = function() {
    console.log('My name is ' + this.name);
    console.log('My belt is ' + this.belt);
};

var hero = new Hero();
hero.logs();

var foze = new Foze();
foze.logs();
