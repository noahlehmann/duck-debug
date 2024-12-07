<script>
    export let content;
</script>

<li>
    <p>{content}</p>
</li>

<style>
    li, p {all: unset;}

    p {
        word-break: break-word;
        color: #999999;
        font-size: 0.8rem;
    }
</style>