import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
        <div className="content">
            <div className="text__container">
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur. Sed pharetra velit molestie mauris ridiculus est aliquam commodo. Leo dictum eget mollis nunc sed mollis nec. Ut quam malesuada vel tristique. Lorem ipsum dolor sit amet consectetur. Sed pharetra velit molestie mauris ridiculus est aliquam commodo. Leo dictum eget mollis nunc sed mollis nec. Ut quam malesuada vel tristique.
                </p>
            </div>
            <div className="login__form">
                <div className="fields">
                    <div className="login__field field">
                        <label className="text-field__label" for="login">Логин</label>
                        <input className="text-field__input" type="text" name="login" id="login" placeholder="Login" />
                    </div>
                    <div className="password__field field">
                        <label className="text-field__label" for="passworf">Пароль</label>
                        <input className="text-field__input" type="text" name="password" id="login" placeholder="Password" />
                    </div>
                </div>
                <div className="button_field">
                    <div className="login__button">
                        <button className="login bf__bt">
                            Войти
                        </button>
                        <Link to="/reg">
                            <button className="signup bf__bt">
                            Регистрация
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoginPage
