const field = [
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
];
const hiddenField = createHiddenField();
startParty();

function startParty() {
  const coordinates = requestCoordinates();

  showSelectedFigures(coordinates);
  checkEqualitySetSelected(coordinates);
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

function requestCoordinates() {
  coordinates = prompt(
    `Поле выглядит так\n${field[0]}\n${field[1]}\n${field[2]}\n${field[3]}\n Укажите 2 места на поле. Введите значения координат строкой 'xyxy' где х - номер строки, a y - номер столбца`
  );

  const arr = coordinates
    .split("")
    .every((e) => ["0", "1", "2", "3"].includes(e));
  if (arr === false) {
    requestCoordinates(field);
  } else {
    return [
      { y: coordinates[0], x: coordinates[1] },
      { y: coordinates[2], x: coordinates[3] },
    ];
  }
}

//==========================================================================================================================================================
//Show the user a field with open values
//==================================================================================================================================================================

function showSelectedFigures(coordinates) {
  const immuField = field.map((array) => {
    return [...array];
  });
  for (let i = 0; i < 2; i++) {
    immuField[coordinates[i].y][coordinates[i].x] =
      hiddenField[coordinates[i].y][coordinates[i].x];
  }
  alert(
    `Попробуйте еще раз \n${immuField[0]}\n${immuField[1]}\n${immuField[2]}\n${immuField[3]}`
  );
}

function checkEqualitySetSelected(coordinates) {
  let arrForFigures = [];
  for (let i = 0; i < 2; i++) {
    arrForFigures.push(hiddenField[coordinates[i].y][coordinates[i].x]);
  }
  if (arrForFigures[0] === arrForFigures[1]) {
    for (let i = 0; i < 2; i++) {
      field[coordinates[i].y][coordinates[i].x] =
        hiddenField[coordinates[i].y][coordinates[i].x];
    }
    startParty();
  }
  startParty();
}
