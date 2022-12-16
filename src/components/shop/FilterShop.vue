<template>
    <form class="form_filter_shop" method="GET" action="/shop/filter">
      <div class="filterElements">
        <div>
          <label for="type">Type de pièce :</label>
          <select id="type" name="type">
            <option value="">--</option>
            <option>type.nom_piece</option> <!-- v-for -->
          </select>
        </div>

        <br>
        <div>
          <label for="marque">Marque vendeuse :</label>
          <select id="marque" name="marque">
            <option value="">--</option>
            <option>marque.nom_marque</option> <!-- v-for -->
          </select>
        </div>

        <br>
        <div>
          <label for="price">Prix :</label>
          <fieldset id="global">
            <p>0</p>
            <input type="range" id="price" name="price" multiple min="0" max="1356" step="0.01">
            <p id="priceOut">l</p>
          </fieldset>
          <component :is="'script'">
            const selectElement = document.querySelector('#price');
            selectElement.addEventListener('change', (event) => {
              const result = document.querySelector('#priceOut');
              result.innerHTML = selectElement.value;
            });
            selectElement.addEventListener('input', (event) => {
              const result = document.querySelector('#priceOut');
              result.innerHTML = selectElement.value;
            });
          </component>
        </div>
      </div>

      <br>
      <input type="submit" id="bFilter" value="Filtrer">
    </form>
</template>

<script>
export default {
  name: "FilterShop",
  methods: {

  }
}
</script>