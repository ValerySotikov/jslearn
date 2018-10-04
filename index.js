document.addEventListener('DOMContentLoaded', () => {
  new SignForm ( { button: '.login-btn' } );
  new LoginForm ( { button: '.reg-btn' } );
});

class AuthForm {
  constructor( { button } ) {
    this.button = this.findElement(button);
    this.init();
  }

  submitForm() {}

  showForm() {
    let wrapper = document.createElement('div');
    let content = this.template();
    wrapper.innerHTML = content;
    let form = document.body.querySelector('.content').appendChild(wrapper);

    form.querySelector('.close-btn').addEventListener('click', () => {
      document.body.querySelector('.content').removeChild(form);
    });
  }

  // closeForm(form) {
  //   document.body.removeChild(form);
  // }

  onClick(node) {
    node.addEventListener('click', this.showForm.bind(this) );
  }

  findElement(elem) {
    return document.querySelector(elem);
  }

  init() {
    this.onClick(this.button);
  }
};

class SignForm extends AuthForm {
  constructor(obj) {
    super(obj);
  }

  template() {
    return `<form action="">
              <div id="login-form" class="login-form">
                <div id="form-title" class="form-title">Authentication</div>
                <img id="close-btn" class="close-btn"src="./close.png" alt="">
                <label id="login-label" class="login-label" for="login-input">
                  User login
                </label>
                <input id="login-input" class="login-input" type="text">
                <label id="password-label" class="password-label" for="password-input">
                  Password
                </label>
                <input id="password-input" class="password-input" type="password">
                <div id="submit-login-btn" class="submit-login-btn" tabindex="1">Submit</div>
              </div>
            </form>`;
  }
};

class LoginForm extends AuthForm {
  constructor(obj) {
    super(obj);
  }

  template() {
    return  `<form action="">
              <div id="sign-form" class="sign-form">
                <div id="form-title" class="form-title">Authorization</div>
                <img id="close-btn" class="close-btn"src="./close.png" alt="">
                <label id="login-label" class="login-label" for="login-input">
                  Enter login
                </label>
                <input id="login-input" class="login-input" type="text">
                <label id="password-label" class="password-label" for="password-input">
                  Enter <br> password
                </label>
                <input id="password-input" class="password-input" type="password">
                <label id="passconf-label" class="passconf-label" for="passconf-input">
                  Confirm password
                </label>
                <input id="passconf-input" class="passconf-input" type="password">
              <div id="submit-auth-btn" class="submit-auth-btn" tabindex="1">Submit</div>
              </div>
            </form>`;
  }
};