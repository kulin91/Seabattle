class Application {
  player = null;
  opponent = null;

  scenes = {};

  constructor(scenes) {
    const player = new BattlefieldView()
    const opponent = new BattlefieldView()

    Object.assign(this, { player, opponent })

    document.querySelector('[data-side="player"]').append(player.root)
    document.querySelector('[data-side="opponent"]').append(opponent.root)

    for (const [sceneName, SceneClass] of Object.entries(scenes)) {
      this.scenes[sceneName] = new SceneClass(sceneName, this)
    }

    for (const scene of Object.values(this.scenes)) {
      scene.init();
    }
  }
}