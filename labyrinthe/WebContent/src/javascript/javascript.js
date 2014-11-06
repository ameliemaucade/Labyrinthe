var randomNumber=Math.trunc(Math.random()*10+1);
var life=3;

/*Chargement des labyrinthes aleatoirement*/
function randomImg(){
	document.getElementById('mazeHit').src = "resources/mazes/maze" + randomNumber + ".png";
};

/*Chargement de la solution correspondant au labyrinthe*/
function showSolution() {
	document.getElementById('solution').src = "resources/mazes/solution" + randomNumber + ".png";
};

/*Affiche une croix, lorsqu'une vie est perdue*/
function showLife(life) {
	if(life==2)
	{
		document.getElementById('life1').src = "resources/delete30.png";
	}
	if(life==1)
	{
		document.getElementById('life2').src = "resources/delete30.png";
	}
	if(life==0)
	{
		document.getElementById('life3').src = "resources/delete30.png";
	}
};

/*Reinitialise le jeux*/
function lostGame() {
	document.getElementById("lostId").click();
	$(".heros").animate({ top: 20, left: 50});
	document.getElementById('life1').src = "resources/favorite21.png";
	document.getElementById('life2').src = "resources/favorite21.png";
	document.getElementById('life3').src = "resources/favorite21.png";

};

/*Affichage des Pop-ups*/
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});



/*Redirection a partir des pop-up*/
$(function() {

	if(window.location.pathname=="/labyrinthe/maze.html")
	{

		var lostYes = document.getElementById("lostYes");
		var lostNo = document.getElementById("lostNo");
		var winYes = document.getElementById("winYes");
		var winNo = document.getElementById("winNo");



		lostYes.onclick = function() {
			life=3;
			//$("#hitTestObjectLife").html(life);
		}

		lostNo.onclick = function() {
			location.href = "solution.html";
		}

		winYes.onclick = function() {
			location.reload();
		}

		winNo.onclick = function() {
			location.href = "index.html";
		}
	}
});

/*Controle des collisions*/
$(function(){ 

	$(".heros").animate({ top: 20, left: 50});

	/*Pour stocker les positions du heros*/
	var positionX = [];
	var positionY = [];

	$('.heros').mousedown(function () {
		$(".heros").draggable({
			drag: function(event, ui) {

				var targetObject = $(event.target);
				var objectPosition = $(event.target).offset();

				/*Collision entre le heros et le labyrinthe*/
				var otherObject = targetObject.attr("id") == "herosHit" ? $('#mazeHit') : $('#herosHit');
				var hit = targetObject.objectHitTest({"object":otherObject, "transparency":true});
				HitTestResult(hit, {"x":objectPosition.left, "y":objectPosition.top});

				/*Collision entre le heros et le burger*/
				var otherObject2 = targetObject.attr("id") == "herosHit" ? $('#burgerHit') : $('#herosHit');
				var win= targetObject.objectHitTest({"object":otherObject2, "transparency":true});
				WinTestResult(win, {"x":objectPosition.left, "y":objectPosition.top});

				/*Construction des deux tableaux de positions*/
				if(positionX.length == 20 && positionY.length == 20)
				{
					positionX.length = 0;
					positionY.length = 0;
				}
				positionX.push(objectPosition.left);
				positionY.push(objectPosition.top);
			}
		}); 
	});

	/*Resultat des tests de collision entre le heros et les bords*/
	function HitTestResult(hit, pos){

		var hitText = 'NO';
		var hitColor = '#FF0000';

		if(hit){
			$('.heros').trigger('mouseup');
			if(life>0)
			{
				alert("Attention !");
				hitText = "YES";
				hitColor = '#00B600';
				life--;
				showLife(life);

				$(".heros").animate({ left: positionX[0]-668, top: positionY[0]-69});
			}

			else
			{
				lostGame();
			}
		}
	}

	/*Resultat des tests de collision entre le heros et le burger*/
	function WinTestResult(win, pos){
		var hitText = 'NO';
		var hitColor = '#FF0000';
		if(win)
		{
			if(positionX[0]>740 && positionX[0]<780 && positionY[0]>550 && positionY[0]<620)
			{

				document.getElementById("winId").click();
			}
			else
			{
				$('.heros').trigger('mouseup');
				if(life>0)
				{
					alert("Vous avez triché !");
					life--;
					showLife(life);
				}
				else
				{
					lostGame();
				}
				$(".heros").animate({ top: 20, left: 50});
			}
		}

	}

});