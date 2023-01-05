<template>
    <!-- simple graphic with a red line-->
    <div class="grid-element">
        <h2>Chart</h2>
        <Bar v-if="data.labels" :data="data" />
    </div>


</template>
  
<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Bar
    },
    data() {
        return {
            data: {
                // labels: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                datasets: [
                    {
                        label: 'Nombre de visites',
                        data: null,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2
                    }
                ],
                url: 'http://localhost:3000/contractors/affluence/4'
            },
            options: {
                responsive: true
            }
        }
    },
    async mounted() {
        // fetch data from the server
        const responce = await fetch(this.data.url)
        const data = await responce.json()

        const labelss = [8,9,10,11,12,13,14,15,16,17,18,19,20]
        this.data.labels = labelss

        const visiteurs = []
        
        data.data.forEach(element => {
            const index = labelss.indexOf(parseInt(element.tranche_horaire))
            visiteurs[index] = element.compteur
        });


        this.data.datasets[0].data = visiteurs
        // console.log(this.data.datasets[0].data)

        // compare the tranche horaire with the labelss
        // if the tranche horaire is equal to the labelss
        // then push the compteur to the compteurs array

        // delete the value of the labels who are not in the tranche horaire
        // for (let i = 0; i < labelss.length; i++) {
        //     if (tranche_horaire.includes(labelss[i])) {
        //         compteurs.push(data.data[i].compteur)
        //     } else {
        //         labelss.splice(i, (i-1))
        //     }
        // }
    }
}


</script>