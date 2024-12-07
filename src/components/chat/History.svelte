<script>
    import Message from "./Message.svelte";
    import ModeratorMessage from "./ModeratorMessage.svelte";
    import {MESSAGES} from "../../lib/stores.js";
    import {onMount} from "svelte";

    let historyContainer;

    onMount(() => {
        const observer = new MutationObserver(() => {
            historyContainer.scrollTop = historyContainer.scrollHeight;
        });
        observer.observe(historyContainer, { childList: true, subtree: true });
        return () => observer.disconnect();
    });
</script>

<div class="history" bind:this={historyContainer}>
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
        padding: 1rem 0;
        max-height: 60vh;
        overflow-y: auto;
        flex: 1;

    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 1rem
    }
</style>