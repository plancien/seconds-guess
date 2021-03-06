define(['../level_capabilities'], function (addLevelCapabilities) {
    
    var Level = function (params) {
        addLevelCapabilities(this, params);
        this.initEvents();
        
        this.instructions = [
            ['good', 'Trust the numbers']
        ];
    };
    
    
    Level.prototype.start = function () {
        var level = this;
        
        setTimeout(function () {
            level.chronoStart();
        }, Math.random()*1000 + 500);
        
    };
    
    
    Level.prototype.setScore = function () {
        this.score = this.classicScore(100);
    };
    
    
    Level.prototype.initEvents = function () {
        var level    = this;
        var eventBus = this.eventBus;
        
        eventBus.on('chrono started', function () {
            var seconds = level.countNextSecond(0);
            if (seconds < 10) {
                eventBus.emit('countdown', 10);
            }
        });
    };
    
    return Level;
    
});