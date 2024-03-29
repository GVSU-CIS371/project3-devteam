<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currentCreamer" :syrup="currentSyrup"
      :baseBeverage="currentBaseBeverage" />
    <div class="beverage-options">
      <h2>Temperature</h2>
      <ul>
        <li v-for="temp in temps" :key="temp">
          <label>
            <input type="radio" name="temperature" :value="temp" v-model="currentTemp" />
            {{ temp }}
          </label>
        </li>
      </ul>
    </div>
    <div>
      <h2>Creamer</h2>
      <ul>
        <li v-for="creamer in creamers" :key="creamer">
          <label>
            <input type="radio" name="creamer" :value="creamer" v-model="currentCreamer" />
            {{ creamer }}
          </label>
        </li>
      </ul>
    </div>
    <div>
      <h2>Syrup</h2>
      <ul>
        <li v-for="syrup in syrups" :key="syrup">
          <label>
            <input type="radio" name="syrup" :value="syrup" v-model="currentSyrup" />
            {{ syrup }}
          </label>
        </li>
      </ul>
    </div>
    <div>
      <h2>Base Beverage</h2>
      <ul>
        <li v-for="beverage in baseBeverages" :key="beverage">
          <label>
            <input type="radio" name="baseBeverage" :value="beverage" v-model="currentBaseBeverage" />
            {{ beverage }}
          </label>
        </li>
      </ul>
    </div>
    <div>
      <h2>Beverage Name</h2>
      <input type="text" v-model="recipeName" placeholder="Enter recipe name" />
      <button @click="makeBeverage">Make Beverage</button>
    </div>
    
    <div class="beverages-list">
      <ul>
        <li v-for="beverage in ingredientsStore.recipes" :key="beverage.name" @click="selectBeverage(beverage)">
          {{ beverage.name }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import { useIngredientsStore, Recipe } from "@/piniaStore/ingredients";
// Define reactive data

const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");

const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");

const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const currentSyrup = ref("None");

const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentBaseBeverage = ref("Coffee");


const recipeName = ref("");

const ingredientsStore = useIngredientsStore();

// adding beverage to store
function makeBeverage() {
  if (!recipeName.value.trim()) {
    alert("Please enter a recipe name.");
    return;
  }

  ingredientsStore.addRecipe({
    name: recipeName.value,
    temperature: currentTemp.value,
    creamer: currentCreamer.value,
    syrup: currentSyrup.value,
    baseBeverage: currentBaseBeverage.value,
  });

  recipeName.value = "";
}


function selectBeverage(beverage: Recipe) {
  currentTemp.value = beverage.temperature;
  currentCreamer.value = beverage.creamer;
  currentSyrup.value = beverage.syrup;
  currentBaseBeverage.value = beverage.baseBeverage;
}

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>

<style scoped>
.app-container {
  display: flex;
  justify-content: space-around;
}

.beverages-list {
  flex-grow: 1;
  margin-left: 20px;
}

.beverage-options {
  flex-grow: 2;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 5px;
}

li:hover {
  background-color: #f0f0f0;
}

</style>
