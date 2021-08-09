class Mouse {
  element = null;

  under = false;
  pUnder = false;

  x = null;
  y = null;

  pX = null;
  pY = null;

  left = false;
  pLeft = false;

  delta = 0;
  pdelta = 0;

  constructor(element) {
    this.element = element;

    const update = (e) => {
      this.x = e.clientX
      this.y = e.clientY
      this.delta = 0
      this.space = false;
      this.under = true
    }

    element.addEventListener('keydown', e => {
      if (event.code == 'Space') {
        this.tick()
        const newDirection = this.space === false ? true : false
        this.space = newDirection
      }

    });

    element.addEventListener('mousemove', e => {
      this.tick()

      update(e)
    });
    element.addEventListener('mouseenter', e => {
      this.tick()

      update(e)
    });

    element.addEventListener('mouseleave', e => {
      this.tick()

      update(e)
      this.under = false
    });

    element.addEventListener('mousedown', e => {
      this.tick()

      update(e)

      if (e.button === 0) {
        this.left = true
      }
    });
    element.addEventListener('mouseup', e => {
      this.tick()

      update(e)

      if (e.button === 0) {
        this.left = false
      }
    });
    element.addEventListener('wheel', e => {
      this.tick()

      this.x = e.clientX
      this.y = e.clientY
      this.under = true
      this.delta = e.deltaY > 0 ? 1 : -1;
    });
  }

  tick() {
    this.pX = this.x;
    this.pY = this.y;
    this.pUnder = this.under;
    this.pLeft = this.left;
    this.pDelta = this.delta;
    this.pSpace = this.space;
  }
}