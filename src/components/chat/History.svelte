<script>
    import Message from "./Message.svelte";
    import ModeratorMessage from "./ModeratorMessage.svelte";
    import {MESSAGES} from "../../lib/stores.js";
</script>

<div class="history">
    <ul class="list">
        <ModeratorMessage content="Rubberduck_42 has entered the chat."/>
        {#each $MESSAGES as message}
            <Message content={message.text} time={message.time} isUser={message.isUser}/>
        {/each}
    </ul>
</div>

<style>
    ul {all: unset;}

    .history {
        padding: 1rem 0
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 1rem
    }
</style>