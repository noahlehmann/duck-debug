<script>
    import {faGithub} from '@fortawesome/free-brands-svg-icons';
    import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
</script>

<div class="footer">
    <a
        class="link-wrapper"
        href="https://github.com/noahlehmann/duck-debug"
        target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x"/>
        <p class="version-tag">duck-debug:v0.0.1</p>
    </a>

    <div class="legal">
        <p>All Rights Reserved 2024 - Noah Lehmann</p>
    </div>
</div>

<style>
    a, p {
        all: unset;
    }

    .link-wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

    .version-tag {
        color: #EEFF00;
    }

    a {
        cursor: pointer;
        color: white;
    }

    .footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 2%;
    }
</style>