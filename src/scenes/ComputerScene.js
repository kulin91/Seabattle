class ComputerScene extends Scene {
  start() {
    document.querySelectorAll('.app-actions').forEach((element) => element.classList.add('hidden'));

    document.querySelector('[data-scene="computer"]').classList.remove('hidden');
  }

  update() {
    const { mouse, opponent, player } = this.app;

    const cells = opponent.cells.flat();
    const cell = cells.find((cell) => isUnderPoint(mouse, cell));

    cells.forEach((cell) => cell.classList.remove('battlefield-item__active'));

    if (isUnderPoint(mouse, opponent.table)) {
      cell.classList.add('battlefield-item__active');
    }
  }
}
