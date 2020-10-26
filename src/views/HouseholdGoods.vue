<template>
  <div class="about">
    <h1>Order list</h1>
    <div class="orderList"> 
      <div class="barItemList">
        <h3>Bar</h3>
        <div class="item" v-for="item in products" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="HouseholdGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>
      
      <div class="juceItemList">
        <h3>Juce</h3>
        <div class="item" v-for="item in juce" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="HouseholdGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="teaItemList">
        <h3>Tea</h3>
        <div class="item" v-for="item in tea" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="HouseholdGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="moninItemList">
        <h3>Monin</h3>
        <div class="item" v-for="item in monin" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="HouseholdGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="syropItemList">
        <h3>syrop</h3>
        <div class="item" v-for="item in syrop" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="HouseholdGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>


    </div>
    <div class="getOrder">
      <textarea class="inputOrder" type="text" :value="order"></textarea>
      <div class="buttons">
        <button @click="deleteOrder()">Delete order</button>
        <button @click="toString()">Get order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseholdGoods',
  data() {
    return {
      HouseholdGoods: [],
      order: '',
      products: [
        {
          id: 'milk',
          value: 'Молоко 3,2%',
          title: 'Молоко 3,2%',
          for: 'milk'
        },
        {
          id: 'cream',
          value: 'Сливки 10%',
          title: 'Сливки 10%',
          for: 'cream'
        },
        {
          id: 'iceCream',
          value: 'Мороженое',
          title: 'Мороженое',
          for: 'iceCream'
        },
        {
          id: 'soyaMilk',
          value: 'Соевое молоко',
          title: 'Соевое молоко',
          for: 'soyaMilk'
        },
        {
          id: 'coconatMilk',
          value: 'Кокосовое молоко',
          title: 'Кокосовое молоко',
          for: 'coconatMilk'
        },
        {
          id: 'matcha',
          value: 'Матча',
          title: 'Матча',
          for: 'matcha'
        },
        {
          id: 'cocoa',
          value: 'Какао',
          title: 'Какао',
          for: 'cocoa'
        },
        {
          id: 'marshmallow',
          value: 'Маршмеллоу',
          title: 'Маршмеллоу',
          for: 'marshmallow'
        },
        {
          id: 'waterSparklingLarge',
          value: 'Вода газ 1,5л',
          title: 'Вода газ 1,5л',
          for: 'waterSparklingLarge'
        },
        {
          id: 'waterSparkling',
          value: 'Вода газ 0,5л',
          title: 'Вода газ 0,5л',
          for: 'waterSparkling'
        },
        {
          id: 'waterStill',
          value: 'Вода негаз 0,5л',
          title: 'Вода негаз 0,5л',
          for: 'waterStill'
        },
        {
          id: 'groundСinnamon',
          value: 'Молотая корица',
          title: 'Молотая корица',
          for: 'groundСinnamon'
        },
        {
          id: 'cinnamon',
          value: 'Корица в палках',
          title: 'Корица в палках',
          for: 'cinnamon'
        },
        {
          id: 'orangeSugar',
          value: 'Апельсиновый сахар',
          title: 'Апельсиновый сахар',
          for: 'orangeSugar'
        },
        {
          id: 'vanillaSugar',
          value: 'Ванильный сахар',
          title: 'Ванильный сахар',
          for: 'vanillaSugar'
        },
        {
          id: 'anise',
          value: 'Бадьян',
          title: 'Бадьян',
          for: 'anise'
        },
        {
          id: 'driedOrange',
          value: 'Сушеный апельсин',
          title: 'Сушеный апельсин',
          for: 'driedOrange'
        },
        {
          id: 'coconutFlakes',
          value: 'Кокосовая стружка',
          title: 'Кокосовая стружка',
          for: 'coconutFlakes'
        },
      ],
      juce: [
        {
          id: 'juceOrange',
          value: 'Сок 0,2 апельсин',
          title: 'Сок 0,2 апельсин',
          for: 'juceOrange'
        },
        {
          id: 'juceTomato',
          value: 'Сок 0,2 томат',
          title: 'Сок 0,2 томат',
          for: 'juceTomato'
        },
        {
          id: 'juceApple',
          value: 'Сок 0,2 яблоко',
          title: 'Сок 0,2 яблоко',
          for: 'juceApple'
        },
        {
          id: 'juceCherry',
          value: 'Сок 0,2 вишня',
          title: 'Сок 0,2 вишня',
          for: 'juceCherry'
        },
      ],
      tea: [
        {
          id: 'teaSticksBlack',
          value: 'Чай стики черный',
          title: 'Чай стики черный',
          for: 'teaSticksBlack'
        },
        {
          id: 'teaSticksErl',
          value: 'Чай стики бергамот',
          title: 'Чай стики бергамот',
          for: 'teaSticksErl'
        },
        {
          id: 'teaSticksThyme',
          value: 'Чай стики чабрец',
          title: 'Чай стики чабрец',
          for: 'teaSticksThyme'
        },
        {
          id: 'teaSticksGreen',
          value: 'Чай стики зеленый',
          title: 'Чай стики зеленый',
          for: 'teaSticksGreen'
        },
        {
          id: 'teaSticksJasmine',
          value: 'Чай стики жасмин',
          title: 'Чай стики жасмин',
          for: 'teaSticksJasmine'
        }, 

      ],
      monin: [
        {
          id: 'raspberriesMonin',
          value: 'Сироп малина монин',
          title: 'Сироп малина монин',
          for: 'raspberriesMonin'
        },
        {
          id: 'basilMonin',
          value: 'Сироп базилик монин',
          title: 'Сироп базилик монин',
          for: 'basilMonin'
        },
      ],
      syrop: [
        {
          id: 'vanilla',
          value: 'Сироп ваниль',
          title: 'Сироп ваниль',
          for: 'vanilla'
        },
        {
          id: 'raspberry',
          value: 'Сироп малина',
          title: 'Сироп малина',
          for: 'raspberry'
        },
        {
          id: 'chocolate',
          value: 'Сироп шоколад',
          title: 'Сироп шоколад',
          for: 'chocolate'
        },
        {
          id: 'walnut',
          value: 'Сироп орех',
          title: 'Сироп орех',
          for: 'walnut'
        },
        {
          id: 'mint',
          value: 'Сироп мята',
          title: 'Сироп мята',
          for: 'mint'
        },
        {
          id: 'gingerbread',
          value: 'Сироп имбирный пряник',
          title: 'Сироп имбирный пряник',
          for: 'gingerbread'
        },
        
      ]
    }
  },
  methods: {
    toString(HouseholdGoods){
      this.order = this.HouseholdGoods.toString()
    },
    deleteOrder(){
      this.order = ''
    },
  }
}
</script>

<style>
  .orderList {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 900px;
  }
  .inputOrder {
    width: 400px;
    height: 400px;
  }
  .buttons {
    max-width: 200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
</style>