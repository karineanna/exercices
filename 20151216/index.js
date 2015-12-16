var me = {
	name: "karine",
	last_name: "lachkar",
	birthday: "24 juin 1971",
	github: "karineanna",
	occupation:"web dev junior",
			

	getFullName : function() {

		//ici THIS fait reference à l'objet ME
		// pour avoir la valeur associé 
		// a la clé NAME de l'objet courant
		// this.name 
		return this.name +" "+ this.last_name;
	}, 
	// +" "+ Cest pr laisser un espace entre 2 champs 
	
	getOccupation : function(){

		return this.occupation;
	},
	
	setName : function(value){
		// si vous avez compris le truc avec getFullName
		// vous allez m'ecrire ici code necessairee pr modifier
		// la valeur associé à la clé NOM 
		this.name = value;
	},
	
	getField : function (clef){
		return this.adress;
	},
	
	
	setField : function (furgole){
		this.adress = furgole;
	},
	
	getPerso : function(){
		return this.perso;
	},
	
	setPerso : function(photo){
		this.perso = photo;
	},
	
	getInfos: function (){

	},
	
	getGitHub : function () {
		return "https://github.com/" + this.github;

	},
	
	setGitHub : function () {

	},
};

/*console.log(this);
me.setField('62 rue du chemin');
me.setPerso('photo');
console.log(me);
console.log(me.getField('last_name'));
console.log(me.getPerso());*/

console.log(me.github)
console.log(me.getGitHub());