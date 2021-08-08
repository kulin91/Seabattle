const shipDatas = [
  { size: 4, direction: "row", startX: 10, startY: 345 },
  { size: 3, direction: "row", startX: 10, startY: 390 },
  { size: 3, direction: "row", startX: 120, startY: 390 },
  { size: 2, direction: "row", startX: 10, startY: 435 },
  { size: 2, direction: "row", startX: 88, startY: 435 },
  { size: 2, direction: "row", startX: 167, startY: 435 },
  { size: 1, direction: "row", startX: 10, startY: 480 },
  { size: 1, direction: "row", startX: 55, startY: 480 },
  { size: 1, direction: "row", startX: 100, startY: 480 },
  { size: 1, direction: "row", startX: 145, startY: 480 },
]

class PreparationScene extends Scene {
  draggedShip = null
  init() {
    const { player } = this.app
    for (const { size, direction, startX, startY } of shipDatas) {
      const ship = new ShipView(size, direction, startX, startY);
      player.addShip(ship);
    }
  }
  start() {
    console.log("PreparationScene start")
  }
  update() {
    const { mouse, player } = this.app

    // Потанциально хотим начать тянуть корабль
    if (!this.draggedShip && mouse.left && mouse.pLeft) {
      const ship = player.ships.find((ship) => ship.isUnder(mouse))

      if (ship) {
        this.draggedShip = ship
      }
    }

    // Перетаскивание
    if (mouse.left && this.draggedShip) {

      const { left, top } = player.root.getBoundingClientRect()
      this.draggedShip.div.style.left = `${mouse.x - left}px`
      this.draggedShip.div.style.top = `${mouse.y - top}px`

    }
  }
  stop() {
    console.log("PreparationScene stop")
  }
}