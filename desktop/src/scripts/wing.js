class Wing {
  constructor() {
    this.el = document.createElement('div');
    this.commander = new Commander();
  }

  install(host = document.body) {
    host.appendChild(this.el);
    this.commander.install();
  }

  start() {
    this.commander.start();
  }
}
