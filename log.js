class Changelog {
/* Every class needs atleast one constructor
 * Having more than one produces an error */
    constructor(array, version) {
        try {
            if(array instanceof Array) {
                this.log = array;
            } else {
                throw 1;
            }
            if(version instanceof Number) {
                this.version = version;
            } else {
                throw 2;
            }
        } catch(e) {{}
            if(e==1){
                console.log("Error: TypeError Changelog(param1, param2) param1 is not of type Array.")
            } if(e==2) {
                console.log("Error: TypeError Changelog(param1, param2) param2 is not of type Number.");
            }
        }
    }
/* Getters work in the background quietly
 * Whenever you decide to get the value */
get vers() {
        return this.version;
    }
/* Setters work in the background quietly
 * Whenever you decide to set the value */
set vers(val) {
        this.version=val;
        return parseFloat(this.version.toFixed(1));
    }
/* Unlike Getters and Setters Methods
 * Can be called outside of the class */
    push(...val) {
     for(var i=0;i<val.length;i++){
     var num=this.log.length+1;this.version+=0.1;
     this.log.push("\nversion "+parseFloat(this.version.toFixed(1))+" :\n"+num+". "+val[i]+"\n");
     }
    }
    /* Our push function now uses Rest Parameters
     * Which allows us to have infinite arguments */
    display() {
      var data=new String("Changelog :\n");
        for(var i=0;i<this.log.length;i++) {
            data+=this.log[i];
        }
        return data;
    }
}

// Create new instance of Changelog Class..
var a = new Changelog(new Array(), new Number(1.0));

// Push data into an array..
a.push("Created a class!",
       "Added Numbered Lines!",
       "Added Try, Catch, Throw to The Constructor!",
       "Added 'Rest Arguments' to The push() Method!",
       "Added Display Method!",
       "Added 'Changelog Title'!",
       "Added Version Increment and Display!");
alert(a.display());
