<template>
<header class="header">
    <nav class="header__nav">
        <div class="container header__nav-block">
            <a href="" class="header__logo">Logo</a>
            <ul class="header__nav-list">
                <li v-for="link in links" :key="link.url">
                    <router-link :to="link.url" class="header__nav-link">{{ link.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</header>
</template>

<script>
export default {
props: {
    links: Array
}
}
</script>

<style>

</style>