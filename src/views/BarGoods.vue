<template>
  <div class="about">
    <div class="orderList"> 
      <div class="barItemList ItemList">
        <h3>Бар</h3>
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
      
      <div class="juceItemList ItemList">
        <h3>Сок</h3>
        <hr>
        <div class="item" v-for="item in juce" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="teaItemList ItemList">
        <h3>Чай</h3>
        <hr>
        <div class="item" v-for="item in tea" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="moninItemList ItemList">
        <h3>Сиропы Монин</h3>
        <hr>
        <div class="item" v-for="item in monin" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="syropItemList ItemList">
        <h3>Сиропы</h3>
        <hr>
        <div class="item" v-for="item in syrop" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="kegBeerItemList ItemList">
        <h3>Пиво кега</h3>
        <hr>
        <div class="item" v-for="item in kegBeer" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="kegBeerItemList ItemList">
        <h3>Пиво бутылка</h3>
        <hr>
        <div class="item" v-for="item in bottleBeer" :key="item.id">
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
      ],
      kegBeer: [
        {
          id: 'Bayreuther',
          value: 'Кега Байройтер',
          title: 'Кега Байройтер',
          for: 'Bayreuther'
        },
        {
          id: 'DoubleHugs',
          value: 'Кега Дабл Хагс',
          title: 'Кега Дабл Хагс',
          for: 'DoubleHugs'
        },
        {
          id: 'EyeRye',
          value: 'Кега АйРай',
          title: 'Кега АйРай',
          for: 'EyeRye'
        },
        {
          id: 'AceCReam',
          value: 'Кега Ас Крим',
          title: 'Кега Ас Крим',
          for: 'AceCReam'
        },
        {
          id: 'Moloko',
          value: 'Кега Молоко+',
          title: 'Кега Молоко+',
          for: 'Moloko'
        },
        {
          id: 'StAnton',
          value: 'Кега Святой Антон',
          title: 'Кега Святой Антон',
          for: 'StAnton'
        },
        {
          id: 'Goze',
          value: 'Кега Гозе',
          title: 'Кега Гозе',
          for: 'Goze'
        },
      ],
      bottleBeer: [
        {
          id: 'Jaws',
          value: 'Джоус',
          title: 'Джоус',
          for: 'Jaws'
        },
        {
          id: 'brewdivision',
          value: 'Брю Дивижн',
          title: 'Брю Дивижн',
          for: 'brewdivision'
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
    /* display: flex;
    flex-wrap: wrap; */
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