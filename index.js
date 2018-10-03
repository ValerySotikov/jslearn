document.addEventListener('DOMContentLoaded', () => {
  new RegWindow({ elem: '.reg-btn' });
});


class RegWindow {
  constructor({ elem }) {
    this.elem = this.findElement(elem);
    this.init();
  }

  onclick(node) {
    node.addEventListener('click', this.showForm.bind(this));
  }

  findElement(elem) {
    return document.querySelector(elem);
  }

  template() {
    return `
      <form id="reg-form" class="reg-form">
        <div id="input-field" class='input-field'>
          <label id="log-label" class="log-label" for="log-input">Login</label>
          <input id="log-input" class="log-input" type="text">
        </div>
        <div id="input-field" class='input-field'>
          <label id="pass-label" class="pass-label" for="pass-input">Password</label>
          <input class="pass-input" type="password">
        </div>
        <button type="button" id="submit-btn" class="submit-btn">Submit</button>
      </form>
    `;
  }

  showForm() {
    let wrapper = document.createElement('div');
    let content = this.template();
    wrapper.innerHTML = content;
    document.body.appendChild(wrapper);

    new Promise((resolve, reject) => {
      setInterval(() => {
        if (document.body.contains(wrapper)) resolve();
      }, 200);
    }).then(() => {
      this.elem.setAttribute('disabled', true);
      document.querySelector('.submit-btn').addEventListener('click', this.submitForm.bind(this));
    });
  }

  submitForm() {
    console.log('Submitted');
  }

  init() {
    this.onclick(this.elem);
  }
}