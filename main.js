let currentGame = [];
let winner = 0;

$(".roll").on("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  currentGame.push(roll);

  const total = currentGame.reduce((roll, count) => {
    //count number of rolls for each number
    typeof roll[count] == "undefined" ? (roll[count] = 1) : (roll[count] += 1);
    return roll;
  }, {});

  //Check for winner
  Object.keys(total).forEach(item => {
    if (total[item] == 5) {
      winner = item;
    }
  });

  if (winner !== 0) {
    $('#winner').modal('show')
    $('.winner').replaceWith('<div class="winner">'+ roll +'</div>')
  } else {
    $(".result").append(selectDice(roll));
  }
});

//Reset Game
$(".reset").on("click", () => {
  currentGame = [];
  winner = 0;
  $(".result").empty();
  $('#winner').modal('hide')
  return " ";
});

//Select dice to display
const selectDice = number => {
  if (number === 1) {
    return '<i class="fas fa-dice-one dice"></i>';
  }
  if (number === 2) {
    return '<i class="fas fa-dice-two dice"></i>';
  }
  if (number === 3) {
    return '<i class="fas fa-dice-three dice"></i>';
  }
  if (number === 4) {
    return '<i class="fas fa-dice-four dice"></i>';
  }
  if (number === 5) {
    return '<i class="fas fa-dice-five dice"></i>';
  }
  if (number === 6) {
    return '<i class="fas fa-dice-six dice"></i>';
  }
};
