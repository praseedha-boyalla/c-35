class Form {
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing game");
        title.position(150,10);
        var input = createInput("any name");
        var button = createButton('play');
        var greeting = createElement('h3');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playercount);
            greeting.html("hello "+name);
            greeting.position(130,160);
            
        })
    }

}