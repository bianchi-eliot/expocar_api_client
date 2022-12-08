<template>
    <section v-if="contractor" class="informations">
        <form @submit.prevent>
            <input type="text" name="lastname" v-model="contractor.prenom">
            <input type="text" name="firstname" v-model="contractor.nom">

            <textarea name="info" v-model="contractor.infopersonne"></textarea>

            <select name="" id=""></select>
        </form>
    </section>
    <p v-if="error">{{ error }}</p>
</template>

<script>
export default {
    name: 'InformationsComponent',
    data() {
        return {
            url: 'http://localhost:3000/contractors/2',
            contractor: null,
            error: null
        }
    },
    async mounted() {
        const responce = await fetch(this.url)
        const json = await responce.json() 
        if (json.data === 1) this.error = 'An error occured while loading the contractor'
        else this.contractor = json.contractorInfo
    }

}
</script>

<style>
section.informations {
    border: 3px solid black;
    margin: 0 auto;
    width: 100%;
}
</style>