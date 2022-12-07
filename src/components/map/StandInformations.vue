<template>
    <section class="stand-information">
        <div v-if="receptionMessage" class="reception-message">
            <p>Click on a stand to see the current activity taking place</p>
        </div>
        <div v-else-if="timeSlot" class="current-stand">
            <div class="stand-time">
                <div class="time-container">
                    <span class="time-start">{{ timeSlot.hourStart }}</span>
                    <span>h:00</span>
                </div>
                <span> -- </span>
                <div class="time-container">
                    <span class="time-end">{{ timeSlot.hourEnd }}</span>
                    <span>h:00</span>
                </div>
            </div>

            <div class="stand-contractor">
                <span>Contractor:</span>
                <span class="name-brand">{{ timeSlot.societyName }}</span>
                <span class="name-contractor">{{ timeSlot.contractorName }}</span>
                <img :src="require(`../../assets/svg/brands/${timeSlot.image}`)" 
                     :alt="`${timeSlot.societyName} image`">
                <span class="name-activity">{{ timeSlot.activityName }}</span>
            </div>

            <div class="stand-services">
                <button @click="toggleShow">List services</button>
                <ul class="stand-services-list" :class="{ 'hidden': showService }">
                    <li v-for="service in timeSlot.services" :key="service">{{ service }}</li>
                </ul>
            </div>
        </div>
        <div v-else class="no-activity">
            <p>There is no activity right now</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'StandInformationsComponent',
    data() {
        return {
            showService: true
        }
    },
    props: { timeSlot: Object, receptionMessage: Boolean },
    methods: {
        toggleShow() {
            this.showService = !this.showService
        }
    }
}
</script>

<style>
/* Stand information */
.stand-information { 
    --stand-information-height: 60vh;
    --individual-stand-height: calc( var(--stand-information-height) / 2 );
    display: flex;
        flex-direction: column;
        gap: 2px;
    border: 2px solid var(--light-grey);
    border-radius: 5px;
    box-shadow: 2px 2px 2px var(--light-grey);
    width: 400px;
    height: max-content;
    padding: 2px;
}

.stand-information > .current-stand, .stand-information > .no-activity
, .stand-information > .reception-message {
    display: flex;
        flex-direction: column;
        gap: 5px;
    border-radius: 5px;
    height: 275px;
}
.stand-information > .current-stand { border: 2px solid var(--app-color); }
.stand-information > .no-activity { border: 2px solid firebrick; }
.stand-information > .reception-message { border: 2px solid royalblue; }

.no-activity, .reception-message {
    display: flex;
        justify-content: center;
        align-items: center;
    background-color: hsla(0, 60%, 40%, 0.15);
}
.reception-message { background-color: hsla(209, 60%, 40%, 0.15); }
.no-activity > p, .reception-message > p {
    color: #000;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    width: 90%;
}

/* -- Time section */
.stand-information .stand-time {
    display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

    background-color: hsla(100, 60%, 40%, 0.15);
    font-size: 25px;
    height: calc(275px * 0.25);
}

.time-container {
    display: flex;
        gap: 10px;
}

.time-start, .time-end { 
    color: var(--app-color);
    font-size: 32px; 
    font-weight: bold;
}


/* -- Contractor section */
.stand-information .stand-contractor {
    display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: repeat(3, 33%);
        grid-auto-flow: row dense;

    background-color: hsla(0, 50%, 80%, 0.15);
    font-size: 25px;
    height: calc(275px * 0.57);
    padding: 10px;
}

.name-contractor { 
    color: var(--app-color);
    font-size: 20px;
    font-weight: bold; 
}
.name-brand {  
    justify-self: center;
    font-weight: bold;
}
.image-brand { justify-self: center; }
.name-activity { font-style: italic; }

/* -- Services section */
.stand-information .stand-services {
    position: relative;
    display: flex;
        justify-content: center;
    height: calc(275 * 0.15);
}

.stand-services > button {
    background-color: var(--light-grey);
    border: 2px solid var(--dark-grey);
    border-radius: 3px;
    cursor: pointer;
    font-size: 25px;
    height: 100%;
    transition: 0.25s;
}
.stand-services > button:hover { 
    background-color: darkgray; 
    color: white;
}


.stand-services > .stand-services-list {
    position: absolute;
        top: 100%;
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    
    background-color: var(--light-grey);
    box-shadow: 2px 2px 2px var(--dark-grey);
    font-size: 20px;
    width: 80%;
    height: max-content;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow: hidden;
}

.stand-services > .stand-services-list.hidden {
    height: 0;
}

/* Media */
@media all and (min-width: 600px) {
    .section-1 {
        flex-direction: row;
        justify-content: space-around;
    }

    .map-container {
        width: 60%;
    }
}
</style>