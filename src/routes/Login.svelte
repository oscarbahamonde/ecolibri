<script>
  import { user, auth } from "../store";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { useNavigate, useLocation } from "svelte-navigator";

  const google = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  let email = "";
  let password = "";

  async function userIn() {
    $user = await signInWithEmailAndPassword(auth, email, password);
    const from = ($location.state && $location.state.from) || "/";
    navigate("/profile", { replace: true });
  }

  async function googleIn() {
    $user = await signInWithPopup(auth, google);
    const from = ($location.state && $location.state.from) || "/";
    navigate("/profile", { replace: true });
  }

  async function userUp() {
    const usr = await createUserWithEmailAndPassword(auth, email, password);
    $user = await signInWithEmailAndPassword(auth, email, password);
    navigate("/profile");
  }
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-lg">
    <div class="card-body">
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          class="input input-bordered"
          bind:value={email}
        />
      </div>
      <div class="form-control">
        <label class="label" for="password">
          <span class="label-text">Password</span>
        </label>
        <input
          name="password"
          type="password"
          placeholder="password"
          class="input input-bordered"
          bind:value={password}
        />
        <span class="label">
          <span class="label-text-alt link link-hover">Forgot password?</span>
        </span>
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div>
      <div class="flex flex-row justify-evenly my-8">
        <i class="social-icon mdi-google" on:click={googleIn} />
      </div>
    </div>
  </div>
</div>
