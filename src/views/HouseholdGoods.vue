<template>
  <div class="about">
    <div class="orderList"> 
      <div class="barItemList ItemList">
        <div class="item" v-for="item in products" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>
    </div>
    <div class="getOrder">

      <div class="buttons">
        <button @click="deleteOrder()">Удалить заказ</button>
        <button @click="toString()">Создать заказ</button>
      </div>

      <textarea-autosize
        ref="myTextarea"
        :min-height="30"
        :max-height="350"
        @blur.native="onBlurTextarea"
        :value="order"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarGoods',
  data() {
    return {
      BarGoods: [],
      order: '',
      products: [
          {
            id: 'paperTawels',
            value: 'Бумажные полотенца',
            title: 'Бумажные полотенца',
            for: 'paperTawels'
          },
          {
            id: 'paperNapkins',
            value: 'Бумажные салфетки',
            title: 'Бумажные салфетки',
            for: 'paperNapkins'
          },
          {
            id: 'toiletPaper',
            value: 'Туалетная бумага',
            title: 'Туалетная бумага',
            for: 'toiletPaper'
          },
          {
            id: 'napkins',
            value: 'Салфетки целлюлозные',
            title: 'Салфетки целлюлозные',
            for: 'napkins'
          },
          {
            id: 'rags',
            value: 'Тряпки микрофибра',
            title: 'Тряпки микрофибра',
            for: 'rags'
          },
          {
            id: 'trashBagS',
            value: 'Мусорные паакеты мал',
            title: 'Мусорные паакеты мал',
            for: 'trashBagS'
          },
          {
            id: 'trashBagL',
            value: 'Мусорные паакеты бол',
            title: 'Мусорные паакеты бол',
            for: 'trashBagL'
          },
          {
            id: 'rubberGloves',
            value: 'Перчатки резиновые',
            title: 'Перчатки резиновые',
            for: 'rubberGloves'
          },
          {
            id: 'toothpicks',
            value: 'Зубочистки',
            title: 'Зубочистки',
            for: 'toothpicks'
          },
          {
            id: 'tubules',
            value: 'Трубочки',
            title: 'Трубочки',
            for: 'tubules'
          },
          {
            id: 'teaSpoons',
            value: 'Ложки чайные',
            title: 'Ложки чайные',
            for: 'teaSpoons'
          },
          {
            id: 'stirringSticks',
            value: 'Палки мешалки',
            title: 'Палки мешалки',
            for: 'stirringSticks'
          },
          {
            id: 'foil',
            value: 'Фольга',
            title: 'Фольга',
            for: 'foil'
          },
      ],
    }
  },
  methods: {
    toString(BarGoods){
      this.order = this.BarGoods.join("\n")
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    max-width: 450px;
  }
  .inputOrder {
    width: 400px;
    height: 400px;
  }
  .buttons {
    max-width: 200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
  }
  .ItemList {
    text-align: left;
  }
  #text_area
  {
    width: 170px;
    height: 30px;
    overflow: hidden;
    padding: 5px;
    border: 1px solid #000000;
    font-family: Arial;
    font-size: 12px;
    color: #000000;
    resize: none;
  }
  #text_area_div
  {
    width: 170px;
    font-family: Arial;
    font-size: 12px;
    white-space: pre-wrap;
    word-wrap: break-word;
    visibility: hidden;
    position: absolute;
    left: -9999px;
  }
</style>