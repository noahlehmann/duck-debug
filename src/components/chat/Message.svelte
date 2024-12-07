<script>
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faUser} from "@fortawesome/free-solid-svg-icons";
    import {faHeadset} from "@fortawesome/free-solid-svg-icons";

    export let content = "A very short message";
    export let time = new Date();
    export let isUser = false;

    function formatTime(date) {
        return date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
    }
</script>

<li class="message">
    <div class="icon-wrapper">
        <div class="icon-box">
            <FontAwesomeIcon icon={isUser? faUser: faHeadset}/>
        </div>
    </div>
    <p class="content">{content}</p>
    <div class="time-wrapper">
        <p class="time">{formatTime(time)}</p>
    </div>
</li>

<style>
    li, p {
        all: unset;
    }

    * {
        color: white;
    }

    .message {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        gap: 0.7rem;
    }

    .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-self: flex-start;
        height: 100%;
    }

    .icon-box {
        display: flex;
        padding: 0.5rem;
        border: #777777 2px solid;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
    }

    .content {
        color: white;
        max-width: 75%;
        padding: 0.1rem 0.4rem 0.3rem 0.4rem;
        margin-bottom: 0.3rem;
        border-bottom: #555555 solid 2px;
        word-break: break-word;
    }

    .time-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }

    .time {
        color: #999999;
        font-size: 0.7rem;
    }


</style>