<script>
    import Header from "./components/header/Header.svelte";
    import Chat from "./components/chat/Chat.svelte";
    import Footer from "./components/footer/Footer.svelte";
</script>

<main>
    <Header/>
    <Chat/>
    <Footer/>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        padding: 2% 5%;
        box-sizing: border-box;
    }
</style>
