import "./forma1.css";

function Forma1() {
  return (
    <div class="login">
      <h2>Login</h2>
      <form>
        <div class="user">
          <input type="text" id="txt" />
          <label for="txt">Username</label>
        </div>
        <div class="password">
          <input type="password" id="pass" />
          <label for="pass">Password</label>
        </div>
        <div class="button">
          <a class="submit" href="#">
            Submit
          </a>
          <div class="register">
            <p>Don't have an account?</p>
            <a href="#">Register</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forma1;
