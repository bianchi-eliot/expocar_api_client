<template>
    <main class="account">
        <Informations/>
        <section class="container-time-services">
            <TimeSlots/>
            <Services/>
        </section>
    </main>
</template>

<script>
import Informations from '../components/account/Informations.vue'
import TimeSlots from '../components/account/TimeSlots.vue'
import Services from '../components/account/Services.vue'

export default {
    name: 'AccountView',
    components: { Informations, TimeSlots, Services }
}
</script>

<style>
main.account {
    display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
    color: hsl(100, 78%, 39%);
    width: calc(100vw - var(--navbar-width));
    padding: 5px 10px;
}
.container-time-services {
    flex-grow: 1;
    display: flex;
        flex-direction: column;
        gap: 20px;
    width: 100%;
}
@media screen and (min-width: 1000px) {
    .container-time-services {
        flex-direction: row;
    }

}
main.account section {
    height: 300px;
}
</style>