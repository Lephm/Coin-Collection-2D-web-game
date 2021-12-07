const menu = () => {
  let levels = [0, 1];
  let curLevelIndex = 0;
  const bg = add([
    sprite("background"),
    pos(height() / 2, width() / 2),
    origin("center"),
    z(-20),
  ]);
  let playButton = add([
    origin("center"),
    text("Play"),
    pos(width() / 2, height() / 2 - 200),
    area(),
  ]);
  let curLevelDisplay = add([
    origin("center"),
    text(`Level: ${levels[curLevelIndex] + 1}`),
    pos(width() / 2, height() / 2 - 50),
  ]);

  let nextLevelButton = add([
    origin("center"),
    text("Next level"),
    pos(width() / 2, height() / 2 + 200),
    area(),
  ]);
  playButton.onClick(() => {
    go("game", levels[curLevelIndex]);
  });
  nextLevelButton.onClick(() => {
    curLevelIndex++;
    if (curLevelIndex >= levels.length) {
      curLevelIndex = 0;
    }
    curLevelDisplay.text = `Level: ${levels[curLevelIndex] + 1}`;
  });
};

export default menu;
