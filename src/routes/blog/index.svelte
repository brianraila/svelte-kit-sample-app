<script>
    // import fetch from 'node-fetch'
    let getData = async () => {
            let response = await fetch('/blog/data.json')
            let results = await response.json()
            return results.data
        }
</script>
<style>

</style>


<div>
    <p>Blog Example</p>
        {#await getData()}
            <!-- getData is pending -->
            <p>Fetching Data</p>
        {:then value}
            <!-- getData was fulfilled -->
            {#each value as item}
                 <!-- content here -->
                 <h4>{item.title}</h4>
                 <p>{item.content}</p>
                 <br>
            {/each}
        {:catch error}
            <!-- getData was rejected -->
            <h4 style="color: red">Error: {error}</h4>
        {/await}    
</div>
