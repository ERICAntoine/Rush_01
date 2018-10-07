function validate ()
{
	// Variable pour recuperer les ID des inputs.
	var name = document.getElementById("name");
	var prenom = document.getElementById("prenom");
	var submit = document.getElementById("submit");
	var email = document.getElementById("email");
	var tel = document.getElementById("tel");
	var website = document.getElementById("website");

	//Function test_input pour afficher le background red dans les inputs.
	function test_input(input)
	{
		if(input.validity.valueMissing)
		{
			input.style.backgroundColor = "red";
			return true;
		}
	}

	/*Fonction flechees sur le boutton submit pour lorsqu'on clique dessus (d'ou le onclick) 
	cela puissent verifier si tout les champs sont remplis*/  
	submit.onclick = (e) =>
	{
		e.preventDefault();
		if(test_input(name))
		{
			alert("Remplir le champ nom");
		};
		if(test_input(prenom))
		{
			alert("Remplir le champ prenom !");

		};
		if (test_input(email))
		{
			 alert("Remplir  le champ l'email !");
		};

		if(test_input(website))
		{
			alert("Remplir le champ Url !");
		};

		if(test_input(tel))
		{
			alert("Remplir le champ Telephone !");
		}
		if(test_input(date))
		{
			alert("Remplir le champ date !")
		};
	}
}

validate();