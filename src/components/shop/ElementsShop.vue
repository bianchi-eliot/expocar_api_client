<template>
  <div class="card">
    <div class="card-content">
      <a href="/shop/piece1">
        <img src="@/assets/jpg/pieces/amc_908833k.png" style="height: 200px; width: 200px; object-fit: cover; object-position: 50% 0;">
      </a>
    </div>
    <div class="card-footer">
      piece.nom
      <div class="alert-warning">
        <strong>Only 18 parts in stock</strong>
      </div>
      35 €
      <a href="#">
        <button class="addToPanier">Add to cart</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElementsShop",
}
</script>