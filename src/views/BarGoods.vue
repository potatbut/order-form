<template>
  <div class="about">
    <div class="orderList"> 
      
      <div class="institutionItemList ItemList">
        <h3 @click="visible=!visible"> ▌ Точка</h3>
        <h6>(Выбирать в первую очередь)</h6>
        <div class="item" v-for="item in institution" :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="barItemList ItemList">
        <h3 @click="visibleBar=!visibleBar"> ▌ Бар</h3>
        <div 
          v-show="visibleBar" 
          class="item" 
          v-for="item in products" 
          :key="item.id"
        >
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>
      
      <div class="juceItemList ItemList">
        <h3 @click="visibleJuce=!visibleJuce"> ▌ Сок</h3>
        <div 
          v-show="visibleJuce" 
          class="item" 
          v-for="item in juce" 
          :key="item.id">
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="teaItemList ItemList">
        <h3 @click="visibleTea=!visibleTea"> ▌ Чай</h3>
        <div 
          v-show="visibleTea" 
          class="item" 
          v-for="item in tea" 
          :key="item.id"
        >
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="moninItemList ItemList">
        <h3 @click="visibleMonin=!visibleMonin"> ▌ Сиропы Монин</h3>
        <div 
          v-show="visibleMonin" 
          class="item" 
          v-for="item in monin" 
          :key="item.id"
        >
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="syropItemList ItemList">
        <h3 @click="visibleSyrop=!visibleSyrop"> ▌ Сиропы</h3>
        <div 
          v-show="visibleSyrop" 
          class="item" 
          v-for="item in syrop" 
          :key="item.id"
        >
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="kegBeerItemList ItemList">
        <h3 @click="visibleKeg=!visibleKeg"> ▌ Пиво кега</h3>
        <div 
          v-show="visibleKeg" 
          class="item" 
          v-for="item in kegBeer" 
          :key="item.id"
        >
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="bottleBeerItemList ItemList">
        <h3 @click="visibleBottle=!visibleBottle"> ▌ Пиво бутылка</h3>
        <div 
          v-show="visibleBottle" 
          class="item" 
          v-for="item in bottleBeer" 
          :key="item.id"
        >
          <input 
            type="checkbox" 
            :id='item.id' 
            :value='item.value' 
            v-model="BarGoods">
          <label :for="item.for">{{item.title}}</label>
        </div>
      </div>

      <div class="otherItemList ItemList">
        <h3 @click="visibleOther=!visibleOther" > ▌ Что-то еще</h3>
        <transition-group name="fade">
          <div 
            v-show="visibleOther" 
            class="item" 
            v-for="item in other" 
            :key="item.id" 
          >
            <input 
              type="checkbox" 
              :id='item.id' 
              :value='item.value' 
              v-model="BarGoods"
            >
            <label :for="item.for">{{item.title}}</label>

          </div>
        </transition-group>
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
        :value="order"
        id="orderOutput"
      />
    </div>
  </div>
  
</template>

<script>
/* @blur.native="onBlurTextarea" */
export default {
  name: 'BarGoods',
  data() {
    return {
      visibleBar: false,
      visibleJuce: false,
      visibleTea: false,
      visibleMonin: false,
      visibleSyrop: false,
      visibleBottle: false,
      visibleKeg: false,
      visibleOther: false,
      BarGoods: [],
      order: '',
      institution:[
          {
            id: 'kuy',
            value: 'Заказ Куйбышева бар:',
            title: 'Заказ Куйбышева бар:',
            for: 'kuy'
          },
          {
            id: 'moh',
            value: 'Заказ Моховая бар:',
            title: 'Заказ Моховая бар:',
            for: 'moh'
          },
          {
            id: 'goroh',
            value: 'Заказ Гороховая бар:',
            title: 'Заказ Гороховая бар:',
            for: 'goroh'
          },
      ],
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
        
        {
          id: 'peanut',
          value: 'Арахисовая паста',
          title: 'Арахисовая паста',
          for: 'peanut'
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
        {
          id: 'schneider1',
          value: 'Шнайдер 1',
          title: 'Шнайдер 1',
          for: 'schneider1'
        },
        {
          id: 'schneider3',
          value: 'Шнайдер 3',
          title: 'Шнайдер 3',
          for: 'schneider3'
        },
        {
          id: 'schneider7',
          value: 'Шнайдер 7',
          title: 'Шнайдер 7',
          for: 'schneider7'
        },
        {
          id: 'LK7',
          value: 'ЛиК 7',
          title: 'ЛиК 7',
          for: 'LK7'
        },
        {
          id: 'LK4',
          value: 'ЛиК 4',
          title: 'ЛиК 4',
          for: 'LK4'
        },
      ],
      other: [
        {
          id: 'form',
          value: 'Бланки списания (кухня + бар)',
          title: 'Бланки списания (кухня + бар)',
          for: 'form'
        },
        {
          id: 'Bierdeckel',
          value: 'Бирдекели',
          title: 'Бирдекели',
          for: 'Bierdeckel'
        },
        {
          id: 'masks',
          value: 'Медицинские маски',
          title: 'Медицинские маски',
          for: 'masks'
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
    Checkbox(){
      this.Checkbox = false
    },
  }
}
</script>

<style scoped>
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
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
