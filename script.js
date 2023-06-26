const field = [
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
];
const fieldWithKnownValues = createfieldWithKnownValues();
startParty();

function startParty() {
  const coordinates = requestCoordinates();

  showSelectedFigures(coordinates);
  checkEqualitySetSelected(coordinates);
}

//==========================================================================================================================================================
//Creating fieldWithKnownValues
//==================================================================================================================================================================

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function createfieldWithKnownValues() {
  let fieldWithKnownValues = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ];
  fieldWithKnownValues.forEach((array) => {
    shuffle(array);
  });
  shuffle(fieldWithKnownValues);
  return fieldWithKnownValues;
}

//==========================================================================================================================================================
//Finding user-specified values
//==================================================================================================================================================================

function requestCoordinates() {
  coordinates = prompt(
    `Поле выглядит так\n${field[0]}\n${field[1]}\n${field[2]}\n${field[3]}\n Укажите 2 места на поле. Введите значения координат строкой 'xyxy' где х - номер строки, a y - номер столбца`
  );

  const array = coordinates
    .split("")
    .every((e) => ["0", "1", "2", "3"].includes(e));
  if (array) {
    return [
      { y: coordinates[0], x: coordinates[1] },
      { y: coordinates[2], x: coordinates[3] },
    ];
  } else {
    return requestCoordinates();
  }
}

//==========================================================================================================================================================
//Show the user a field with open values
//==================================================================================================================================================================

function showSelectedFigures(coordinates) {
  const clonedField = field.map((array) => {
    return [...array];
  });
  clonedField[coordinates[0].y][coordinates[0].x] =
    fieldWithKnownValues[coordinates[0].y][coordinates[0].x];
  clonedField[coordinates[1].y][coordinates[1].x] =
    fieldWithKnownValues[coordinates[1].y][coordinates[1].x];

  alert(
    `Попробуйте еще раз \n${clonedField[0]}\n${clonedField[1]}\n${clonedField[2]}\n${clonedField[3]}`
  );
}

function checkEqualitySetSelected(coordinates) {
  if (
    fieldWithKnownValues[coordinates[0].y][coordinates[0].x] ===
    fieldWithKnownValues[coordinates[1].y][coordinates[1].x]
  ) {
    for (let i = 0; i < 2; i++) {
      field[coordinates[i].y][coordinates[i].x] =
        fieldWithKnownValues[coordinates[i].y][coordinates[i].x];
    }
  }
  startParty();
}
