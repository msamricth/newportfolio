<template>

      <svg
        ref="mainIcon"
        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path
          v-for="(d, i) in paths"
          :key="`base-${i}`"
          :d="d"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
  
  </template>
  
  <script setup>
  const paths = [
  "M18,9.7a.51.51,0,0,1-.1.7h0a3.55,3.55,0,0,0,3,1.67A3.7,3.7,0,0,0,24.5,8.29,3.7,3.7,0,0,0,20.91,4.5a3.7,3.7,0,0,0-3.59,3.79,3.76,3.76,0,0,0,.21,1.22A.52.52,0,0,1,18,9.7Z",
  "M20.91,3.5a4.7,4.7,0,0,0-4.59,4.79,4.74,4.74,0,0,0,.35,1.81l-5.06,3.79a.5.5,0,0,0,.3.9.57.57,0,0,0,.3-.1L17.14,11a4.52,4.52,0,0,0,3.77,2.07A4.7,4.7,0,0,0,25.5,8.29,4.7,4.7,0,0,0,20.91,3.5Zm0,8.57a3.55,3.55,0,0,1-3-1.67,3.78,3.78,0,0,1-.4-.89,3.76,3.76,0,0,1-.21-1.22A3.7,3.7,0,0,1,20.91,4.5,3.7,3.7,0,0,1,24.5,8.29,3.7,3.7,0,0,1,20.91,12.07Z",
  "M16.82,20.64a3.62,3.62,0,0,0-1.81.51.31.31,0,0,0-.1-.15l-2.36-2.48a3.6,3.6,0,0,0,.68-2.09,3.44,3.44,0,0,0-3.37-3.5,3.5,3.5,0,0,0,0,7,3.24,3.24,0,0,0,2-.69l2.34,2.45.05,0a4,4,0,0,0-1.19,2.85,3.77,3.77,0,1,0,7.54,0A3.86,3.86,0,0,0,16.82,20.64ZM7.5,16.43a2.44,2.44,0,0,1,2.36-2.5,2.5,2.5,0,0,1,0,5A2.44,2.44,0,0,1,7.5,16.43ZM16.82,27.5a2.93,2.93,0,0,1,0-5.86,2.93,2.93,0,0,1,0,5.86Z",
  ]
  </script>
  