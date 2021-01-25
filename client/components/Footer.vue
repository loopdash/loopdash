<template>
  <div class="text-sm flex">
    Loopdash &copy; 2021 | {{ averageUptime }}
  </div>
</template>

<script>
export default {
  async fetch () {
    const response = await fetch(
      'http://localhost:8080/api/get-server-status'
    ).then(res => res.json())
    this.averageUptime = `${response.data.averageUptime.toFixed(2)}%`
  },
  data () {
    return {
      averageUptime: null
    }
  }
}
</script>
