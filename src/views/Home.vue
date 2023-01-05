<template>
    <main class="home">
        <Recap/>
        <Chart/>
        <Societes/>
        <Activities/>
        <Services/>
    </main>
</template>

<script>
import Recap from '../components/home/Recap.vue'
import Societes from '../components/home/Societes.vue'
import Activities from '../components/home/Activities.vue'
import Services from '../components/home/Services.vue'
import Chart from '../components/home/Chart.vue'

export default {
    name: 'HomeView',
    components: { Recap, Societes, Activities, Services, Chart }
}
</script>

<style>
main.home {
    display: flex;
        flex-direction: column;
        gap: 40px;
        
}
h2 {
    color: var(--app-color);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
}
.grid {
    display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: start;
        gap: 5px;

}
@media screen and (min-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media screen and (min-width: 1350px) { .grid { grid-template-columns: repeat(3, 1fr); } }
@media screen and (min-width: 1800px) { .grid { grid-template-columns: repeat(4, 1fr); } }

.grid-element {
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    
    background: var(--light-white);
    border: 2px solid var(--app-color);
    border-radius: 5px;
    padding: 5px;
}

.grid-element img { width: 450px; }

.detail-btn {
    border: 2px solid var(--app-color);
    border-radius: 3px;
    box-shadow: 1px 1px 3px lightgray;
    color: var(--app-color);
    cursor: pointer;
    font-size: 20px;
    padding: 5px 10px;
    transition: 0.25s;
}
.detail-btn:hover {
    background-color: var(--app-color);
    color: var(--light-white);
}

.description { 
    display: none;
    width: 350px;
}
.description.show {
    display: block;
}
.description h3 { 
    color: var(--app-color);
    text-align: center; 
}
.description p { text-align: justify; }
</style>