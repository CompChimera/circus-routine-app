<script setup>
import { ref, computed } from 'vue';
import MoveCard from '../components/MoveCard.vue';
  const routineList =  ref([
        {
          id: 1,
          name: "Spring showcase",
          moves: [1,3,2,4,5],
          apparatus: 1
        }
      ]);
  const apparatusList = ref([
    {
      id: 1,
      name: "lyra"
    }
  ]);

  // Functions
  const createRoutine = () => {
      let newRoutine = {
          "id" : routineList.value.length + 1,
          "name" : "New Routine " + (routineList.value.length + 1) ,
          "apparatus" : routineList.value[0].apparatus
      };
      routineList.value.push(newRoutine);
    }

// Computed
  const routineAddButton = computed(() => {
      return routineList.length > 0 ? 'Add a routine to get started' : 'Add a routine'
    });
</script>

<template>

    <h2>Routine</h2>

    <div v-if="routineList.length > 0" class="routine__wrapper">
      <div v-for="routine in routineList" :routine="routine" :key="`routine=${routine.id}`" class="routine___card">
        <h2>{{routine.name}}</h2>  
        <p><strong>Apparatus: </strong>{{apparatusList[0].name}}</p>
        <p><strong>Routine moves:</strong></p>
        <div v-if="routine.moves" class="move-card__wrapper">
            <MoveCard :moveId="value" v-for="(value, key) in routine.moves"  :key="`move=${moveId}`"/>
        </div>
        <div v-else class="move-card__wrapper">
          <span>No moves for this routine yet</span>
        </div>

          
      </div>
    </div>
    <div style="padding: 30px; text-align: center;">
      <button @click="createRoutine" class="button">{{ routineAddButton }}</button>
    </div>
    

</template>

<style>

  .routine__wrapper {
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    align-items: center;
     gap: 30px;
    
    @media (min-width: 750px) {
      grid-template-columns: repeat(2, auto);
    }
  }
  .routine___card {
    background-color: #ffe4e9;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 74%, rgba(148,187,233,1) 100%);
    border: 1px solid #3d5b7e;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 5px 5px 10px 0px #3d5b7e;

  }
  .move-card__wrapper {
    display: grid;
    grid-auto-flow: column;
    gap: 15px;
  }
  </style>