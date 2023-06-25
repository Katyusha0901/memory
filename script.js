const field = [
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
];
const hiddenField = createHiddenField();
startParty(field);

function startParty(gameBoard) {
  const immutableBoard = gameBoard.map((array) => {
    return [...array];
  });

  const coordinates = requestCoordinates(gameBoard);
  const places = findPlaces(coordinates);

  const fieldWithNumbers = showSelectedFigures(places, hiddenField, gameBoard);
  showNewField(fieldWithNumbers);

  checkEqualitySetSelected(
    places,
    fieldWithNumbers,
    hiddenField,
    immutableBoard
  );
}

//==========================================================================================================================================================
//Creating hiddenField
//==================================================================================================================================================================

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function createHiddenField() {
  let hiddenField = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ];
  hiddenField.forEach((array) => {
    shuffle(array);
  });
  shuffle(hiddenField);
  return hiddenField;
}

//==========================================================================================================================================================
//Finding user-specified values
//==================================================================================================================================================================

function requestCoordinates(gameBoard) {
  coordinates = prompt(
    `Поле выглядит так\n${gameBoard[0]}\n${gameBoard[1]}\n${gameBoard[2]}\n${gameBoard[3]}\n Укажите 2 места на поле. Введите значения координат строкой 'xyxy'`
  );
  return coordinates;
}

function findPlaces(coordinates) {
  return [
    { y: coordinates[0], x: coordinates[1] },
    { y: coordinates[2], x: coordinates[3] },
  ];
}

//==========================================================================================================================================================
//Show the user a field with open values
//==================================================================================================================================================================

function showSelectedFigures(places, hiddenField, gameBoard) {
  let fieldWithNumbers = [];
  for (let i = 0; i < 2; i++) {
    gameBoard[places[i].y][places[i].x] = hiddenField[places[i].y][places[i].x];
  }
  fieldWithNumbers = gameBoard;
  return fieldWithNumbers;
}

function checkEqualitySetSelected(
  places,
  fieldWithNumbers,
  hiddenField,
  immutableBoard
) {
  let arrForFigures = [];
  for (let i = 0; i < 2; i++) {
    arrForFigures.push(hiddenField[places[i].y][places[i].x]);
  }
  if (arrForFigures[0] === arrForFigures[1]) {
    startParty(fieldWithNumbers);
  }
  startParty(immutableBoard);
}

function showNewField(newField) {
  alert(
    `Попробуйте еще раз \n${newField[0]}\n${newField[1]}\n${newField[2]}\n${newField[3]}`
  );
}
