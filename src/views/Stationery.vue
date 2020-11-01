<template>
  <div class="about">
    <div class="orderList"> 
      
      <div class="institutionItemList ItemList">
        <h3>Точка:</h3>
        <h6>(Выбирать в первую очередь)</h6>
        <hr>
        <div class="item" v-for="item in institution" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="StationeryItemList ItemList">
        <h3>Заказ:</h3>
        <hr>
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
        <button v-clipboard="() => order">Копировать</button>
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
      institution:[
          {
            id: 'kuy',
            value: 'Заказ Куйбышева канцелярия:',
            title: 'Заказ Куйбышева канцелярия:',
            for: 'kuy'
          },
          {
            id: 'moh',
            value: 'Заказ Моховая канцелярия:',
            title: 'Заказ Моховая канцелярия:',
            for: 'moh'
          },
          {
            id: 'goroh',
            value: 'Заказ Гороховая канцелярия:',
            title: 'Заказ Гороховая канцелярия:',
            for: 'goroh'
          },
      ],
      products: [
          {
            id: 'checkTapeL',
            value: 'Чек лента широкая',
            title: 'Чек лента широкая',
            for: 'checkTapeL'
          },
          {
            id: 'checkTapeS',
            value: 'Чек лента узкая',
            title: 'Чек лента узкая',
            for: 'checkTapeS'
          },
          {
            id: 'pencil',
            value: 'Карандаш ',
            title: 'Карандаш ',
            for: 'pencil'
          },
          {
            id: 'pencilSharpener',
            value: 'Точилка ',
            title: 'Точилка ',
            for: 'pencilSharpener',
          },
          {
            id: 'pen',
            value: 'Ручка шариковая',
            title: 'Ручка шариковая',
            for: 'pen',
          },
          {
            id: 'eraser ',
            value: 'Ластик ',
            title: 'Ластик ',
            for: 'eraser ',
          },
          {
            id: 'scissors ',
            value: 'Ножницы ',
            title: 'Ножницы ',
            for: 'scissors ',
          },
          {
            id: 'permanentMarkerBlack',
            value: 'Маркер перманентный чёрный',
            title: 'Маркер перманентный чёрный',
            for: 'permanentMarkerBlack',
          },
          {
            id: 'permanentMarkerWhite',
            value: 'Маркер перманентный белый',
            title: 'Маркер перманентный белый',
            for: 'permanentMarkerWhite',
          },
          {
            id: 'chalkMarker',
            value: 'Маркер белый меловой',
            title: 'Маркер белый меловой',
            for: 'chalkMarker',
          },
          {
            id: 'transparentTape',
            value: 'Скотч прозрачный',
            title: 'Скотч прозрачный',
            for: 'transparentTape',
          },
          {
            id: 'doubleSidedTape',
            value: 'Скотч двусторонний',
            title: 'Скотч двусторонний',
            for: 'doubleSidedTape',
          },
          {
            id: 'paperTape',
            value: 'Скотч бумажный ',
            title: 'Скотч бумажный ',
            for: 'paperTape',
          },
          {
            id: 'paint',
            value: 'Штемпельная краска черная',
            title: 'Штемпельная краска черная',
            for: 'paint',
          },
          {
            id: 'stapler ',
            value: 'Степлер ',
            title: 'Степлер ',
            for: 'stapler ',
          },
          {
            id: 'staples',
            value: 'Скобы для степлера',
            title: 'Скобы для степлера',
            for: 'staples',
          },
          {
            id: 'paperClips',
            value: 'Скрепки ',
            title: 'Скрепки ',
            for: 'paperClips',
          },
          {
            id: 'multifor',
            value: 'Файлы формата A4',
            title: 'Файлы формата A4',
            for: 'multifor',
          },
          {
            id: 'paper',
            value: 'Бумага A4 ',
            title: 'Бумага A4 ',
            for: 'paper',
          },
          {
            id: 'holePuncher',
            value: 'Дырокол ',
            title: 'Дырокол ',
            for: 'holePuncher',
          },
          {
            id: 'blank',
            value: 'Бланки списания (кухня + бар)',
            title: 'Бланки списания (кухня + бар)',
            for: 'blank',
          },
          {
            id: 'blankMoving',
            value: 'Бланки для перемещения',
            title: 'Бланки для перемещения',
            for: 'blankMoving',
          },
          {
            id: 'blankSchedule',
            value: 'Бланки графика',
            title: 'Бланки графика',
            for: 'blankSchedule',
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
    justify-content: space-between;
    max-width: 450px;
  }
  .buttons {
    max-width: 450px;
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