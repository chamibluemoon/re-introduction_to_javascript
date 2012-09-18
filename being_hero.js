// For the time being, Hero class

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

var hero = new Hero();
hero.logs();
