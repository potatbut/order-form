<template>
  <div class="home">
    <h1>Это форма для создания заказа</h1>
    <ul>
      <li>Выбери категорию</li>
      <li>Отметь нужные пункты</li>
      <li>"Создать заказ"</li>
      <li>"Копировать"</li>
      <li>Готово! Вы восхитительны.</li>
    </ul>
    <p>В этой версси, пожалуйста, сначала выбирайте точку, а потом заказ! Чмок!</p>
    <img src="https://emojis.slackmojis.com/emojis/images/1598266360/10254/pepe_naruto.gif" alt="">
    <p>Написано с Vue2. Будет перенесено на Vue3 :)</p>
    <p class="comment">Сделано <a href="https://vk.com/tomatobutt">мной</a>. Особая благодарность <a href="https://vk.com/srastet">Эльфу Торговцу</a>.</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style >
ul {
  text-align: left;
  width: 250px;
  margin: auto;
  margin-bottom: 100px;
}
.ItemList {
  cursor: pointer;
}
.comment {
  font-size: 10px;
}
</style>
