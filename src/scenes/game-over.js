const gameOver = ({ numOfCoins, win }) => {
  const bg = add([sprite("background"), pos(), origin("center"), z(-20)]);
  add([text(`Coins collected: ${numOfCoins}`), pos(100, 100)]);
  add([
    text(`${win ? "Congrats you have beaten this level" : "You Lost!"}`, {
      size: 60,
    }),
    pos(100, 500),
  ]);
  const backToMainMenuButton = add([
    text("Back to main menu"),
    pos(100, 700),
    area(),
  ]);

  backToMainMenuButton.onClick(() => {
    go("menu");
  });
};

export default gameOver;
