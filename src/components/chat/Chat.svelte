<script>
    import TextField from "./TextField.svelte";
    import History from "./History.svelte";
</script>
<div class="chat">
    <History />
    <TextField />
</div>

<style>
    .chat {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>