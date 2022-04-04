<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Login from "./routes/Login.svelte";
  import Profile from "./routes/Profile.svelte";
  import PrivateRoute from "./routes/PrivateRoute.svelte";
  import { user } from "./store";
  import Footer from "./components/Footer.svelte";
  import Panel from './components/Panel.svelte'

  function handleLogout() {
    $user = null;
  }
</script>

<Router>
  <header>
    <div class="navbar bg-neutral">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl text-white rounded" href="/"
          ><img
            src="/logo.png"
            class="w-12 mx-2"
            alt="ecolibri-logo"
          />
          <h1 class="text-3xl mx-2 font-script">eColibri</h1>
          </a
        >
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered"
          />
        </div>
        <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="btn btn-ghost btn-circle avatar"
            for="avatar"
          >
           {#if $user}
            <div class="w-10 rounded-full">
              <img src={$user.user.photoURL} alt={$user.user.displayName} />
            </div>
            {:else}
            <div class="w-10 rounded-full">
              <img src = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" />
            </div>
            {/if}
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            {#if $user}
            <li><Link to="/dashboard">Dashboard</Link></li>
            {/if}
          </ul>
        </div>
      </div>
    </div>
    <nav />
  </header>

  <main>
    <Route path="login">
      <Login />
    </Route>

    <Route path="/">
      <h3>Home</h3>
      <p>Home sweet home...</p>
      <Footer />
    </Route>

    <Route path="about">
      <h3>About</h3>
      <p>That's what it's all about!</p>
      <Footer />
    </Route>

    <PrivateRoute path="profile" let:location>
      <div class="h-screen flex flex-col items-center">
      <Profile />
      <Link to="/dashboard" class="dashboard-link"><i class="mdi-menu  "></i><span class="align-middle text-2xl">Dashboard</span></Link>
    </div>
    </PrivateRoute>
    <PrivateRoute path="dashboard" let:location>
      <div class="h-screen">
      <Panel route="home"/>
    </div>
    </PrivateRoute>
  </main>
</Router>

