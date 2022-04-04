<script>
  import { user, auth } from "../store";
  import { signOut } from "firebase/auth";

  async function userOut() {
    await signOut(auth);
    $user = null;
  }
</script>

<div class="flex flex-col items-center w-screen">
  <div
    class="bg-base-300 rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full"
  >
    <div class="online avatar">
      <div
        class="mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px"
      >
        <img
          src={$user.user.photoURL}
          width="94"
          height="94"
          alt={$user.user.displayName}
          class="mask mask-squircle"
        />
      </div>
    </div>
    <div>
      <div class="text-center">
        <div class="text-lg font-extrabold">{$user.user.displayName}</div>
        <div class="text-base-content/70 my-3 text-sm">
          {$user.user.email}
        </div>
      </div>
    </div>
    <button class="btn-error btn-outline rounded" on:click={userOut}
      >Logout</button
    >
  </div>
</div>
