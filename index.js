document.addEventListener('DOMContentLoaded', () => {
  new SignForm ( { button: '.login-btn' } );
  new LoginForm ( { button: '.reg-btn' } );
});

class AuthForm {
  constructor( { button } ) {
    this.button = button;
  }
};

class SignForm extends AuthForm {
  constructor() {}

  template() {
    return `<form action="">
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

class LoginForm extends AuthForm {
  constructor() {}

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




// document.addEventListener('DOMContentLoaded', () => {
//   new RegWindow({ elem: '.reg-btn' });
// });

// class RegWindow {
//   constructor({ elem }) {
//     this.elem = this.findElement(elem);
//     this.init();
//   }

//   onclick(node) {
//     node.addEventListener('click', this.showForm.bind(this));
//   }

//   findElement(elem) {
//     return document.querySelector(elem);
//   }

//   template() {
//     return `
//       <form id="reg-form" class="reg-form">
//         <div id="input-field" class='input-field'>
//           <label id="log-label" class="log-label" for="log-input">Login</label>
//           <input id="log-input" class="log-input" type="text">
//         </div>
//         <div id="input-field" class='input-field'>
//           <label id="pass-label" class="pass-label" for="pass-input">Password</label>
//           <input class="pass-input" type="password">
//         </div>
//         <button type="button" id="submit-btn" class="submit-btn">Submit</button>
//       </form>
//     `;
//   }







//   showForm() {
//     let wrapper = document.createElement('div');
//     let content = this.template();
//     wrapper.innerHTML = content;
//     document.body.appendChild(wrapper);

//     new Promise((resolve, reject) => {
//       setInterval(() => {
//         if (document.body.contains(wrapper)) resolve();
//       }, 200);
//     }).then(() => {
//       this.elem.setAttribute('disabled', true);
//       document.querySelector('.submit-btn').addEventListener('click', this.submitForm.bind(this));
//     });
//   }

//   submitForm() {
//     let login = document.querySelector('.log-input').value;
//     let password = document.querySelector('.pass-input').value;
    
//     if (login === "Valery S" && password === "123456") console.log('You\'re submitted!');
//     else console.log('Incorrect login or password!');
//   }

//   init() {
//     this.onclick(this.elem);
//   }
// }