var stats = [
  {gamesPlayed: "0", win: "0", loss: "0", draw: "0", goals: "0", assists: "0", goalsConceded: "0", ownGoals: "0", penaltiesSaved: "0", penaltiesMissed: "0", yellowCards: "0", redCards: "0", bonus: "0", totalPoints: "0"}  
];

var players = [
    {name: "Lionel Messi", position: "Centre Forward", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg", stats},
    {name: "Cristiano Ronaldo", position: "Left Winger", image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", stats},
    {name: "Eden Hazard", position: "Left Winger", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/ENG-BEL_%2817%29.jpg", stats},
    {name: "Neymar Jr", position: "Left Winger", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bra-Cos_%281%29.jpg", stats},
    {name: "Antoine Griezmann", position: "Centre Attacking Midfielder", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FRA-ARG_%2810%29.jpg", stats},
    {name: "Zlatan Ibrahimovic", position: "Striker", image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg", stats}
  ];

var competitions = [
  {name: "Premier League", games: "38", players},
  {name: "Champions League", games: "14", players}
];
console.log(competitions)



/*
function stats(gamesPlayed, win, loss, draw, goals, assists, goalsConceded, ownGoals, penaltiesSaved, penaltiesMissed, yellowCards, redCards, bonus, totalPoints){
  this.gamesPlayed = gamesPlayed
  this.win = win
  this.loss = loss
  this.draw = draw
  this.goals = goals
  this.assists = assists
  this.goalsConceded = goalsConceded
  this.ownGoals = ownGoals
  this.penaltiesSaved = penaltiesSaved
  this.penaltiesMissed = penaltiesMissed
  this.yellowCards = yellowCards
  this.redCards = redCards
  this.bonus = bonus
  this.totalPoints = totalPoints
}

var myStats = new stats("0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0")
*/
console.log(stats)
  
function myFunction2(){
    $(document).ready(function(){
      $('#players .row').empty()
      console.log(localStorage.getItem('players'))
      if(localStorage.getItem('players')){
        players1 = JSON.parse(localStorage.getItem('players'))
        
        for(var i = 0; i  < players.length; i++){
          var divCol = $('<div class="col-md-4">')
          var divCard = $('<div class="card">')
          var image = $('<img class="card-img-top" src="'+players[i].image+'" />')
          var divCardBody = $('<div class="card-body">')
          var title = $('<h5 class="card-title">'+players[i].name+'</h5>')
          var text = $('<p class="card-text"> '+players[i].position+'</p>')
          divCard.append(image)
          divCardBody.append(title)
          divCardBody.append(text)
          divCard.append(divCardBody)
          divCol.append(divCard)
          $('#players .row').append(divCol)          
        }
      }
    })

}

function myFunction(){
  players.push({name: String($('#addName').val()),position: String($('#addPosition').val()),image: String($('#addLink').val())})
  localStorage.setItem('players', JSON.stringify(players))

}

function myFunction3(){
  players.splice(Number($('#removePlayer').val()), 1)
}

function myFunction4(){
  console.log("working")
  var table = document.getElementById("statsTable")
  var oRows = document.getElementById('statsTable').getElementsByTagName('tr');
  var iRowCount = oRows.length;
  for(var j = iRowCount; j > 1; j--){
    table.deleteRow(j-1)
    console.log("working 2")
  }

  for(var i = 0; i < competitions[0].players.length; i++){
    var row = table.insertRow(i+1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)
    var cell7 = row.insertCell(6)
    var cell8 = row.insertCell(7)
    var cell9 = row.insertCell(8)
    var cell10 = row.insertCell(9)
    var cell11 = row.insertCell(10)
    var cell12 = row.insertCell(11)
    var cell13 = row.insertCell(12)
    var cell14 = row.insertCell(13)
    var cell15 = row.insertCell(14)
    var cell16 = row.insertCell(15)
    var cell17 = row.insertCell(16)
    var cell18 = row.insertCell(17)
    cell1.innerHTML = i+1
    cell2.innerHTML = competitions[0].players[i].name
    cell3.innerHTML = competitions[0].players[i].position
    cell4.innerHTML = competitions[0].name
    cell5.innerHTML = competitions[0].players[i].stats[0].gamesPlayed
    cell6.innerHTML = competitions[0].players[i].stats[0].win
    cell7.innerHTML = competitions[0].players[i].stats[0].loss
    cell8.innerHTML = competitions[0].players[i].stats[0].draw
    cell9.innerHTML = competitions[0].players[i].stats[0].goals
    cell10.innerHTML = competitions[0].players[i].stats[0].assists
    cell11.innerHTML = competitions[0].players[i].stats[0].goalsConceded
    cell12.innerHTML = competitions[0].players[i].stats[0].ownGoals
    cell13.innerHTML = competitions[0].players[i].stats[0].penaltiesSaved
    cell14.innerHTML = competitions[0].players[i].stats[0].penaltiesMissed
    cell15.innerHTML = competitions[0].players[i].stats[0].yellowCards
    cell16.innerHTML = competitions[0].players[i].stats[0].redCards
    cell17.innerHTML = competitions[0].players[i].stats[0].bonus
    cell18.innerHTML = competitions[0].players[i].stats[0].totalPoints
  }
}

function myFunction5(){
  console.log("working")
  var table = document.getElementById("statsTable")
  
  var oRows = document.getElementById('statsTable').getElementsByTagName('tr');
  var iRowCount = oRows.length;
  for(var j = iRowCount; j > 1; j--){
    table.deleteRow(j-1)
    console.log("working 2")
  }

  for(var i = 0; i < competitions[1].players.length; i++){
    var row = table.insertRow(i+1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)
    var cell7 = row.insertCell(6)
    var cell8 = row.insertCell(7)
    var cell9 = row.insertCell(8)
    var cell10 = row.insertCell(9)
    var cell11 = row.insertCell(10)
    var cell12 = row.insertCell(11)
    var cell13 = row.insertCell(12)
    var cell14 = row.insertCell(13)
    var cell15 = row.insertCell(14)
    var cell16 = row.insertCell(15)
    var cell17 = row.insertCell(16)
    var cell18 = row.insertCell(17)
    cell1.innerHTML = i+1
    cell2.innerHTML = competitions[1].players[i].name
    cell3.innerHTML = competitions[1].players[i].position
    cell4.innerHTML = competitions[1].name
    cell5.innerHTML = competitions[1].players[i].stats[0].gamesPlayed
    cell6.innerHTML = competitions[1].players[i].stats[0].win
    cell7.innerHTML = competitions[1].players[i].stats[0].loss
    cell8.innerHTML = competitions[1].players[i].stats[0].draw
    cell9.innerHTML = competitions[1].players[i].stats[0].goals
    cell10.innerHTML = competitions[1].players[i].stats[0].assists
    cell11.innerHTML = competitions[1].players[i].stats[0].goalsConceded
    cell12.innerHTML = competitions[1].players[i].stats[0].ownGoals
    cell13.innerHTML = competitions[1].players[i].stats[0].penaltiesSaved
    cell14.innerHTML = competitions[1].players[i].stats[0].penaltiesMissed
    cell15.innerHTML = competitions[1].players[i].stats[0].yellowCards
    cell16.innerHTML = competitions[1].players[i].stats[0].redCards
    cell17.innerHTML = competitions[1].players[i].stats[0].bonus
    cell18.innerHTML = competitions[1].players[i].stats[0].totalPoints
  }
}
