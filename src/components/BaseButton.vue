<template>
    <button class="btn">see all</button>
</template>
<style scoped>
.btn {
    font-family: var(--alata);
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    background-color: transparent;
    border: 2px solid var(--very-dark-gray);
    padding: 0.5rem 1.5rem;
    color: var(--very-dark-gray);
    cursor: pointer;
    width: fit-content;
    height: fit-content;
}
.btn:active {
    background-color: var(--very-dark-gray);
    color: var(--white);
}
</style>