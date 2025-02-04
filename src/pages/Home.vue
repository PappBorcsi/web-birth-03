<template>
  <q-page class="bg-dark text-white" style="height: 100vh;">
    <div class="flex justify-end mt-auto">

    </div>
    <h1 class="text-black">FOHOME</h1>
    <q-btn
      color="negative"
    class="q-mt-md q-pa-lg "
    size="lg"
    round
    no-caps
    icon="arrow_back"
    @click="goToSzuli"
    >
    Katt ide
    </q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSzuli = () => {
  router.push('/szuli')
}
</script>
