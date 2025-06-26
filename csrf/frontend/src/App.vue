<template>
  <div>
    <h1>CSRF Demo</h1>
    <button @click="getCSRFToken">Get CSRF Token</button>
    <button @click="makeSecureRequest">Make Secure Request</button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref } from "vue"

const message = ref("")
let csrfToken = ""

axios.defaults.withCredentials = true

const getCSRFToken = async () => {
  const res = await axios.get("http://localhost:3000/api/csrf-token")
  csrfToken = res.data.csrfToken
  message.value = "✅ CSRF token obtained"
}

const makeSecureRequest = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/secure-data", {}, {
      headers: {
        "X-XSRF-TOKEN": csrfToken
      }
    })
    message.value = res.data.message
  } catch (err) {
    message.value = "❌ Request failed (CSRF?)"
  }
}
</script>
