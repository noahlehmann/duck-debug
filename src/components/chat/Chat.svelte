<script>
    import TextField from "./TextField.svelte";
    import History from "./History.svelte";
</script>
<div class="chat">
    <History />
    <span></span>
    <TextField />
</div>

<style>
    span {
        flex: 1;
    }
    .chat {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>