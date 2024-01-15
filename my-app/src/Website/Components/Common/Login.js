import { useEffect, useState } from "react";

const Login = (props) => {
  const { loginData, setLoginData, setLogOut } = props;

  const [loginType, setLoginType] = useState("");
  const [loginError, setLoginError] = useState();
  const [loginValid, setLoginValid] = useState(false);

  const loginForm = () => {
    return (
      <form>
        {loginType === "register" && (
          <div class="form-group">
            <label for="recipient-name" class="col-form-label login-label">
              Name :
            </label>
            <input
              type="text"
              class="form-control"
              id="recipient-name"
              name="name"
              value={loginData.name}
              onChange={(e) => handleLoginData(e)}
            />
            {loginError?.name && (
              <p className="login-error">*{loginError?.name}</p>
            )}
          </div>
        )}
        <div class="form-group">
          <label for="recipient-name" class="col-form-label login-label">
            Email ID :
          </label>
          <input
            type="text"
            class="form-control"
            id="recipient-name"
            name="email"
            value={loginData.email}
            onChange={(e) => handleLoginData(e)}
          />
          {loginError?.email && (
            <p className="login-error">*{loginError?.email}</p>
          )}
        </div>
        <div class="form-group">
          <label for="message-text" class="col-form-label login-label">
            Password :
          </label>
          <input
            type="password"
            class="form-control"
            id="recipient-name"
            name="password"
            value={loginData.password}
            onChange={(e) => handleLoginData(e)}
          />
          {loginError?.password && (
            <p className="login-error">*{loginError?.password}</p>
          )}
        </div>
      </form>
    );
  };

  const handleLoginData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginValidation = () => {
    const redgeEmail = /^[a-z0-9A-Z]+@[a-z]+\.[a-z]{2,3}$/;

    const error = {
      name: loginData.name === "" ? "Please Enter Your Name" : "",
      email: !redgeEmail.test(loginData.email)
        ? "Please Enter Valid Email ID"
        : "",
      password:
        loginData.password === ""
          ? "Enter Password"
          : loginData.password.length < 5
          ? "Week Password"
          : "",
    };

    if (
      (loginType === "register" && error.name === "") ||
      (error.email === "" && error.password === "")
    ) {
      return setLoginError(null), setLoginValid(true);
    }
    return setLoginError(error);
  };

  useEffect(() => {
    setLoginData({
      name: "",
      email: "",
      password: "",
    });
    setLoginError("");
  }, [loginType]);

  useEffect(() => {
    setLoginError("");
  }, [loginData]);

  return (
    <div className="login">
      <div
        class="modal fade"
        id="login"
        tabindex="-1"
        role="dialog"
        aria-labelledby="loginTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="loginTitle">
                Sign In
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" onClick={() => setLoginType("admin")}>
                  <a
                    class="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#admin"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Admin
                  </a>
                </li>
                <li class="nav-item" onClick={() => setLoginType("register")}>
                  <a
                    class="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#register"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="admin"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  {loginForm()}
                </div>
                <div
                  class="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  {loginForm()}
                </div>
              </div>
              <button
                className={`login-signinBtn
                  ${
                    loginError === null && loginValid
                      ? "btn btn-success"
                      : "btn btn-primary"
                  }
                `}
                onClick={() =>
                  loginError === null
                    ? (setLoginValid(false), setLogOut(true))
                    : loginValidation()
                }
                data-dismiss={loginError === null && loginValid ? "modal" : ""}
                aria-label="Close"
              >
                {loginError === null && loginValid ? "Sign In" : "Verify"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
