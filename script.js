var players = [
    {name: "Lionel Messi", position: "Centre Forward", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"},
    {name: "Cristiano Ronaldo", position: "Left Winger", image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"},
    {name: "Eden Hazard", position: "Left Winger", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/ENG-BEL_%2817%29.jpg"},
    {name: "Neymar Jr", position: "Left Winger", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bra-Cos_%281%29.jpg"},
    {name: "Antoine Griezmann", position: "Centre Attacking Midfielder", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FRA-ARG_%2810%29.jpg"},
    {name: "Zlatan Ibrahimovic", position: "Striker", image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg"}
  ];

  

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