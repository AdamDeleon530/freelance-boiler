<template>
    <div class="max-w-md mx-auto p-4">
      <input v-model="email" placeholder="Email" class="input input-bordered w-full mb-2" >
      <input v-model="password" type="password" placeholder="Password" class="input input-bordered w-full mb-2" >
      <div class="gap-4 flex justify-between max-w-md"> 
          <button class="btn btn-primary flex-1" @click="handleLogin">Log In</button>
          <button class="btn border-primary flex-1" @click="handleSignUp">Sign Up</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const email = ref('')
  const password = ref('')
  const { signIn, signUp } = useAuth()
  
  const handleLogin = async () => {
    await signIn(email.value, password.value)
    navigateTo('/')
  }

    const handleSignUp = async () => {
        await signUp(email.value, password.value)
        navigateTo('/')
    }
  </script>
  