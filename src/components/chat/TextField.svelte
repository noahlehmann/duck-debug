<script>
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faPlay} from "@fortawesome/free-solid-svg-icons";
    import ChatManager from "../../lib/ChatManager.js";

    let input = "";

    function postMessage() {
        if (input === "") return;
        ChatManager.processMessage(input, true, new Date());
        input="";
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            postMessage();
        }
    }
</script>

<div class="text-field">
    <textarea
            bind:value={input}
            id="message-text-input"
            on:keydown={handleKeyDown}
            placeholder="Explain your Problem ... "></textarea>
    <div class="send-button-wrapper">
        <button
                id="message-send-button"
                aria-labelledby="message-send-button-label"
                aria-controls="message-text-input"
                on:click={postMessage}>
            <FontAwesomeIcon icon={faPlay}/>
        </button>
        <label class="send-label" id="message-send-button-label" for="message-send-button">send</label>
    </div>
</div>

<style>
    button, textarea {all: unset;}

    .text-field {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        gap: 5%;
        border: 3px solid #555555;
        border-radius: 4px;
        min-height: 13%;
        padding: 1rem;
    }

    textarea {
        flex: 1;
    }

    .send-button-wrapper {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 3px;
        border: #EEFF00 solid 2px;
        aspect-ratio: 1 / 1;
        padding: 3px;
    }

    .send-label {
        font-size: 0.7rem;
        color: #999999;
    }
</style>