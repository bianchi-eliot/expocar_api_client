<template>
    <section v-if="services" class="services">
        <div v-for="service in services" :key="service.id_service" class="service">
            <input :id="service.libelle_service" type="checkbox" name="services" 
                :value="service.id_service" v-model="contractorServices" @change="toggleActivated">
            <label :for="service.libelle_service">{{ service.libelle_service }}</label>
            <div v-if="service.id_service === 1 && guestBook">
                {{ guestBook }}
            </div>
        </div>
    </section>
    <p v-if="error">{{ error }}</p>
</template>

<script>
export default {
    name: 'ServicesComponent',
    data() {
        return {
            services: null,
            contractorServices: null,
            guestBook: null,
            stars: null,
            error: null
        }
    },
    methods: {
        async toggleActivated(e) {
            const serviceId = e.target.value
            if (!e.target.checked) {
              await fetch(`http://localhost:3000/contractors/active/${serviceId}`, {
                method: 'DELETE'
              })  
            } else {
              await fetch(`http://localhost:3000/contractors/active/${serviceId}`, {
                method: 'POST'
              })  
            }
        }
    },
    async mounted() {
        let results = await fetch('http://localhost:3000/contractors/activated-services/3')
        let responce = await results.json()
        if (responce.data === 0) {
            this.contractorServices = responce.servicesActivated
            this.guestBook = responce.guestBook
            this.stars = responce.stars
        }
        else if (responce.data === 1) this.error = 'An error occured' 

        results = await fetch('http://localhost:3000/services')
        responce = await results.json()
        if (responce.data === 0) this.services = responce.services
        else if (responce.data === 1) this.error = 'An error occured' 
    }
}
</script>

<style>
section.services {
    display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    background: var(--light-white);
    border: 2px solid var(--app-color);
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    color: var(--app-color);
    font-size: 20;
    padding: 5px 10px;
}
.service {
    display: flex;
        gap: 30px;
}
</style>