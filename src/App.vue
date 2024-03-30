<template>
  <div class="app-container">
    <div class="beverage-details">
      <!-- Beverage Options -->
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

        <h2>Creamer</h2>
        <ul>
          <li v-for="creamer in creamers" :key="creamer">
            <label>
              <input type="radio" name="creamer" :value="creamer" v-model="currentCreamer" />
              {{ creamer }}
            </label>
          </li>
        </ul>

        <h2>Syrup</h2>
        <ul>
          <li v-for="syrup in syrups" :key="syrup">
            <label>
              <input type="radio" name="syrup" :value="syrup" v-model="currentSyrup" />
              {{ syrup }}
            </label>
          </li>
        </ul>

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

      <!-- Beverage Name Input box and MakeBeverage Button -->
      <div>
        <h2>Beverage Name</h2>
        <input type="text" v-model="recipeName" placeholder="Enter recipe name" />
        <button @click="makeBeverage">Make Beverage</button>
      </div>
      
      <!-- Customer Created Beverages List -->
      <div class="beverages-list">
        <ul>
          <li v-for="beverage in ingredientsStore.recipes" :key="beverage.name" @click="selectBeverage(beverage)">
            {{ beverage.name }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Beverage Icon -->
    <div class="beverage-icon">
      <Beverage :isIced="currentTemp === 'Cold'" :creamer="currentCreamer" :syrup="currentSyrup"
        :baseBeverage="currentBaseBeverage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import { useIngredientsStore, Recipe } from "@/piniaStore/ingredients";

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

  recipeName.value = ""; // Reset input
}

function selectBeverage(beverage: Recipe) {
  currentTemp.value = beverage.temperature;
  currentCreamer.value = beverage.creamer;
  currentSyrup.value = beverage.syrup;
  currentBaseBeverage.value = beverage.baseBeverage;
}
</script>

<style lang="scss">
:root {
  --primary-color: #5b8c5a;
  --primary-color-dark: #507e50;
  --background-color: #f5f5f5;
  --text-color: #333;
  --border-radius: 8px;
}

body, html {
  height: 100%;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 20px;
}

.beverage-icon {
  padding: 50px;
  background: tan;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.beverage-details{
  max-height: 92vh;
  overflow-y: auto;
  padding: 20px;
  background: tan;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

input[type="radio"] {
  accent-color: var(--primary-color);
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  box-sizing: border-box;
}

button {
  background-color: var(--primary-color);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-color-dark);
  }
}

.beverages-list li {
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
}

</style>