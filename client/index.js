document.addEventListener('DOMContentLoaded', () => {
  new SignForm ( { button: '.reg-btn' } );
  new LoginForm ( { button: '.login-btn' } );
});

class AuthForm {
  constructor( { button } ) {
    this.button = this.findElement(button);
    this.init();
  }

  showForm() {
    let wrapper = document.createElement('div');
    wrapper.className = 'auth-form';

    let content = this.template();
    wrapper.innerHTML = content;
    wrapper.addEventListener('submit', () => {
      return false;
    });

    if ( this.otherFormOnPage() ) {
      document.body.querySelector('.content')
                   .removeChild(document.querySelector('.auth-form'));
    }
                   
    if ( this.isOnPage() ) return;

    if ( document.querySelector(this.selector) ) {
      return;
    }

    let form = document.querySelector('.content').appendChild(wrapper);

    form.querySelector('.close-btn').addEventListener('click', () => {
      document.querySelector('.content').removeChild(form);
    });
  }

  isOnPage() {
    return document.querySelector('.auth-form');
  }

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

  otherFormOnPage() {
    return document.querySelector('.login-form');
  }

  template() {
    return `<form action="http:/127.0.0.1:3000/login/authorize/" name="signform" method="post">
              <div id="sign-form" class="sign-form">
                <div id="form-title" class="form-title">Authorization</div>
                <div>
                  <img id="close-btn" class="close-btn"src="./public/assets/close.png" alt="">
                </div>
                <label id="login-label" class="login-label" for="login-input">
                  Enter login
                </label>
                <input id="login-input" class="login-input" type="text" name="user" required>
                <label id="password-label" class="password-label" for="password-input">
                  Enter <br> password
                </label>
                <input id="password-input" class="password-input" type="password" name="password" required>
                <label id="passconf-label" class="passconf-label" for="passconf-input">
                  Confirm<br/>password
                </label>
                <input id="passconf-input" class="passconf-input" type="password" name="passconf" required>
                <input id="submit-auth-btn" class="submit-auth-btn" value="Send" type="submit" tabindex="1">
              </div>
            </form>`;
  }
};

class LoginForm extends AuthForm {
  constructor(obj) {
    super(obj);
  }

  otherFormOnPage() {
    return (document.querySelector('.sign-form'));
  }

  template() {
    return  `<form action="http:/127.0.0.1:3000/login/authenticate/" name="loginform" method="post">
              <div id="login-form" class="login-form">
                <div id="form-title" class="form-title">Authentication</div>
                <img id="close-btn" class="close-btn"src="./public/assets/close.png" alt="">
                <label id="login-label" class="login-label" for="login-input">
                  User login
                </label>
                <input id="login-input" class="login-input" type="text" name="user" required>
                <label id="password-label" class="password-label" for="password-input">
                  Password
                </label>
                <input id="password-input" class="password-input" type="password" name="password" required>
                <input id="submit-login-btn" class="submit-login-btn" value="Send" type="submit" tabindex="1">
              </div>
            </form>`;
  }
};