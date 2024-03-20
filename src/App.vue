<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currentCreamer" :syrup="currentSyrup" :baseBeverage="currentBaseBeverage" />
    <div>
      <h2>Temperature</h2>
      <ul>
        <li v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
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
            <input
              type="radio"
              name="creamer"
              :value="creamer"
              v-model="currentCreamer"
            />
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
            <input
              type="radio"
              name="syrup"
              :value="syrup"
              v-model="currentSyrup"
            />
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
            <input
              type="radio"
              name="baseBeverage"
              :value="beverage"
              v-model="currentBaseBeverage"
            />
            {{ beverage }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
// Define reactive data

const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");

const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");

const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const currentSyrup = ref("None");

const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentBaseBeverage = ref("Coffee");
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
