<template>
    <div class="p-10">
      <h1 class="text-3xl font-bold">Welcome!</h1>
      <p v-if="user">Hello {{ user.email }}</p>
      <button class="btn btn-primary" @click="signOut">Sign Out</button>
    </div>
  </template>
  
  <script setup>
  const { user, signOut } = useAuth()
  </script>
  