import React, { Component } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  registrationUserOperation,
  loginUserOperation,
} from "../../redux/auth/authOperations";


class AuthForm extends Component {
  state = {
    email: "",
    password: "",
    licence: true,
  };

  onHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLicenceChange = (evt) => {
    const isCheckbox = evt.target.type === "checkbox";
    this.setState({
      licence: isCheckbox ? evt.target.checked : evt.target.value,
    });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.location.pathname === "/registration"
      ? this.props.registrationUserOperation(
        {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
        },
        this.props.history
      )
      : this.props.loginUserOperation(
        {
          email: this.state.email,
          password: this.state.password,
        },
        this.props.history
      );

    this.reset();
  };

  reset = () => {
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <form className={styles.formAuth} onSubmit={this.onHandleSubmit}>
        <h2 className={styles.title}>
          {this.props.location.pathname === "/registration"
            ? "Registration Page"
            : "Login Page"}
        </h2>

        {this.props.location.pathname === "/registration" && (
          <label className={styles.labelName} htmlFor={this.name}>
            Name
            <input
              onChange={this.onHandleChange}
              className={styles.inputName}
              type="text"
              name="name"
              value={this.state.name}
              required
              placeholder="Enter Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            />
          </label>
        )}

        <label className={styles.labelName} htmlFor={this.email}>
          Email
          <input
            onChange={this.onHandleChange}
            className={styles.inputName}
            type="email"
            name="email"
            value={this.state.email}
            required
            placeholder="Enter email"
          />
        </label>
        <label className={styles.labelName} htmlFor={this.password}>
          Password
          <input
            onChange={this.onHandleChange}
            className={styles.inputName}
            type="password"
            name="password"
            value={this.state.password}
            required
            placeholder="Enter Password"
          />
        </label>

        {this.props.location.pathname === "/registration" && (
          <div className={styles.checkboxContainer}>
            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="licence"
                onChange={this.handleLicenceChange}
                checked={this.state.licence}
                required
              />
              Соглашаюсь с условиями
            </label>
          </div>

        )}
        <button
          className={styles.buttonGo}
          type="submit"
          disabled={!this.state.licence}
        >
          {this.props.location.pathname === "/registration"
            ? "Registration"
            : "Login"}
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  registrationUserOperation,
  loginUserOperation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthForm));
