<script setup>
import BaseMenu from './BaseMenu.vue';
import BaseSocial from './BaseSocial.vue';
</script>

<template>
    <footer>
        <div class="flex-1">
            <img class="logo" src="../assets/logo.svg" alt="logo"/>
            <div class="flex">
                <BaseMenu/>
            </div>
        </div>
        <div class="flex-2">
            <div class="social">
                <BaseSocial/>
            </div>
            <p class="copyright">© 2021 Loopstudios. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 2.5rem;
    background-color: var(--black);
    color: var(--white);
}
.logo {
    width: 10rem;
}
.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 0;
}
.flex-1, .flex-2 {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
}
.social {
    display: flex;
    gap: 1rem;
}
.copyright {
    color: var(--dark-gray);
}

@media screen and (min-width: 768px) {
    footer {
        flex-direction: row;
        justify-content: space-between;
        padding: 2.5rem 12rem;
    }
    .flex {
        flex-direction: row;
        gap: 1.5rem;
        padding: 0;
    }
    .flex-1 {
        align-items: flex-start;
    }
    .flex-2 {
        align-items: flex-end;
    }
}
</style>