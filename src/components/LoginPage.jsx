import { React, useState } from "react";
import { NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="login-box">
        <div className="Frame-text">
          <h1>ورود به پنل مدیریت مرکز توسعه تجارت الکترونیکی</h1>
        </div>

        <div className="login-inputs">
          <div className="login-input-number">
            <div>
              <input
                type="text"
                className="phone-number"
                placeholder="شماره تلفن همراه"
              />
            </div>
          </div>
          <div className="login-input-password">
            <div>
              <input
                type="password"
                className="password"
                placeholder="رمز عبور"
              />
            </div>
          </div>
        </div>

        <div className="login-button">
          <button type="submit" id="login-button">
            ورود
          </button>
        </div>

        <div className="forgot-password">
          <div className="">
            <NavLink to="/PasswordRecovery">
              <a href="/PasswordRecovery">فراموشی رمز عبور</a>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
