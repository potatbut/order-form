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
          {
            id: 'Parchment',
            value: 'Пергамент ',
            title: 'Пергамент ',
            for: 'Parchment'
          },
          {
            id: 'clingFilm',
            value: 'Пищевая пленка ',
            title: 'Пищевая пленка ',
            for: 'clingFilm'
          },
          {
            id: 'floorCleaner',
            value: 'Моющее для пола',
            title: 'Моющее для пола',
            for: 'floorCleaner'
          },
          {
            id: 'dishDetergent',
            value: 'Моющее для посуды',
            title: 'Моющее для посуды',
            for: 'dishDetergent'
          },
          {
            id: 'glassCleaner',
            value: 'Моющее для стекол',
            title: 'Моющее для стекол',
            for: 'glassCleaner'
          },
          {
            id: 'shumanite',
            value: 'Шуманит ',
            title: 'Шуманит ',
            for: 'shumanite'
          },
          {
            id: 'Pemolux',
            value: 'Пемолюкс ',
            title: 'Пемолюкс ',
            for: 'Pemolux'
          },
          {
            id: 'liquidSoap',
            value: 'Жидкое мыло',
            title: 'Жидкое мыло',
            for: 'liquidSoap'
          },
          {
            id: 'sanox',
            value: 'Санокс ',
            title: 'Санокс ',
            for: 'sanox'
          },
          {
            id: 'mole',
            value: 'Крот ',
            title: 'Крот ',
            for: 'mole'
          },
          {
            id: 'white',
            value: 'Белизна ',
            title: 'Белизна ',
            for: 'white'
          },
          {
            id: 'sponges ',
            value: 'Губки для посуды',
            title: 'Губки для посуды',
            for: 'sponges '
          },
          {
            id: 'metallSponges ',
            value: 'Губки металлические',
            title: 'Губки металлические',
            for: 'metallSponges '
          },
          {
            id: 'paperBag',
            value: 'Пакеты бумажные с собой',
            title: 'Пакеты бумажные с собой',
            for: 'paperBag'
          },
          {
            id: 'bottle',
            value: 'Бутылки 0,5 + крышки',
            title: 'Бутылки 0,5 + крышки',
            for: 'bottle'
          },
          {
            id: 'tureens',
            value: 'Черные супницы + крышки',
            title: 'Черные супницы + крышки',
            for: 'tureens'
          },
          {
            id: 'cellophane',
            value: 'Пакеты целлофановые',
            title: 'Пакеты целлофановые',
            for: 'cellophane'
          },
          {
            id: 'washinPowder',
            value: 'Стиральный порошок',
            title: 'Стиральный порошок',
            for: 'washinPowder'
          },
          {
            id: 'fork',
            value: 'Вилки пластик',
            title: 'Вилки пластик',
            for: 'fork'
          },
          {
            id: 'spoon',
            value: 'Ложки пластик',
            title: 'Ложки пластик',
            for: 'spoon'
          },
          {
            id: 'cupL',
            value: 'Стаканы 0,4 + крышки',
            title: 'Стаканы 0,4 + крышки',
            for: 'cupL'
          },
          {
            id: 'cupS',
            value: 'Стаканы 0,3 + крышки',
            title: 'Стаканы 0,3 + крышки',
            for: 'cupS'
          },
          {
            id: 'capholder',
            value: 'Капхолдеры ',
            title: 'Капхолдеры ',
            for: 'capholder'
          },
          {
            id: 'quesadilla',
            value: 'Кесадильницы ',
            title: 'Кесадильницы ',
            for: 'quesadilla'
          },
          {
            id: 'burrito',
            value: 'Бурритницы ',
            title: 'Бурритницы ',
            for: 'burrito'
          },
          {
            id: 'waffleCloth',
            value: 'Вафельное полотно',
            title: 'Вафельное полотно',
            for: 'waffleCloth'
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