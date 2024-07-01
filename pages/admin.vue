<template>
    <div>
        <!-- Your template code here -->
         <h1>Admin</h1>
         <UButton 
         @click="logout"
         >
            Salir
         </UButton>
    </div>
</template>

<script setup>
const {logout} = useFirebaseAuth()
</script>