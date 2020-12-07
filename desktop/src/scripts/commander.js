const { getPath } = require('windows-shortcuts-ps');

class Commander {
  constructor() {
    this.el = document.createElement('ul');
    this.tbPath = `C:/Users/${
      process.env.username || process.env.user
    }/AppData/Roaming/Microsoft/Internet Explorer/Quick Launch/User Pinned/TaskBar`;
  }

  install(host = document.body) {
    host.appendChild(this.el);
  }

  start() {
    let d = fs.readdirSync(this.tbPath);
    d = d.filter(v => v.endsWith('.lnk'));
    let m = d.map(v => v.slice(0, -4));
    let _in = 1;
    m.forEach(i => {
      const _li = document.createElement('li');
      _li.innerText = i;
      const execPath = `${this.tbPath}/${d[_in - 1]}`.toString();
      _li.onclick = () => {
        if (i === 'File Explorer') {
          exec('explorer');
        } else {
          console.log(execPath);
          gp(execPath).then(v => {
            console.log(
              execFile(
                path.normalize(path.resolve(v)),
                (err, stdout, stderr) => {
                  console.log(stdout);
                  console.log(err);
                  console.log(stderr);
                }
              )
            );
          });
        }
      };
      this.el.appendChild(_li);
      // divider
      if (_in !== m.length) {
        const _divider = document.createElement('li');
        _divider.innerHTML = '&nbsp;|&nbsp;';
        this.el.appendChild(_divider);
      }
      _in++;
    });
  }
}
