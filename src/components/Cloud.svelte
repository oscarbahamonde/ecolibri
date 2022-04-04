<script>
  let files = []
  let selectedFile = null

  function handleFiles(event) {
    event.preventDefault();
    files = event.target.files;

  }

  function dropFiles(event) {
    event.preventDefault();
    files = event.dataTransfer.files;
  }
</script>
<div class="dropzone" on:drop={dropFiles}>
<label for="files">Upload your tracks <i class="mdi-music"></i></label>
{#each files as file}
  <div class="file">
    <div class="file-name">{file.name}</div>
    <div class="file-size">{file.size}</div>
  </div>
{/each}
<input type="file" id="files" name="files[]" multiple class="hidden" on:change={handleFiles} />
</div>
