<template>
      <div class="clientbox">
              <div class="img-box">
                <img src="../assets/images/c-1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Service: Tempor incididunt <br>
                  <span>
                    Dipiscing elit
                  </span>
                </h5>
                <img class="img" src="../assets/images/quote.png" alt="">
                <p>
                  Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>

                <router-link :to="{ name: 'singleservice', query: { id: data.id } }">
                  <button type="button" class="btn btn-primary">
                    More...
                  </button>
                </router-link>

              </div>
            </div>
</template>

<script>
export default {
  props: ['data']
}
</script>