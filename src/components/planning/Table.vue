<template>
    <div v-if="(timeSlots && timeSlots.length > 0)" class="planning">
        <div v-for="timeSlot in timeSlots" :key="timeSlot.numero_stand" class="stand">
            <p class="stand-number">Stand N°{{ timeSlot.numero_stand }}</p>
            <div v-for="hour, index in hours" :key="hour">
                <p class="hour">{{ hour }}h</p>
                <p class="time-slot" :data-id="timeSlot.id_personne[index]">
                    <img :src="require(`../../assets/svg/brands/${timeSlot.photo_marque[index]}`)" 
                        :alt="`Image ${timeSlot.nom_societe[index]}`">
                    <span>{{ timeSlot.nom[index] }} {{timeSlot.prenom[index] }}</span>
                    <span>{{ timeSlot.nom_societe[index] }}</span>
                    <span>{{ timeSlot.nom_activite[index ]}}</span>
                </p>
            </div>
        </div>
    </div>

    <div v-else style="align-self: center; font-size: 45px">
        <p>There is no time slot today</p>
    </div>
</template>

<script>
export default {
    name: 'TableComponent',
    props: { timeSlots: Array, hours: Array },
}
</script>