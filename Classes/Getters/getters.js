class Speaker {

    constructor(name, verb){
        this.name = name;
        this._verb = verb || "speak";
    }

    set verb(verb){
        this._verb = verb;
    }

    get verb(){
        return this._verb;
    }

    speak(text) {
        console.log(this.name + " " + this._verb + " '" + text + "'");
    }

}

class Shouter extends Speaker {

    constructor(name, verb){
        super(name, verb || "shouts");
    }

    speak(text){
        super.speak(text.toUpperCase());
    }
}


//new Shouter("Dr. Loudmouth").speak("hello there");
new Speaker("Leonardo").speak("hello");
new Speaker("Michelangelo", "roar").speak("hello");
new Shouter("Donatello").speak("hello");
new Shouter("Raphael", "scream").speak("hello");



