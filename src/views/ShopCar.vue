<template>
	<section class="car-shop">
    <article class="table-products">
      <AppShopCarItem />
    </article>
    <AppButton w="8rem" h="3rem">
      <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path>
      </svg>
      Pagar
    </AppButton>
	</section>
</template>
<script setup>
import AppShopCarItem from '@/components/AppShopCarItem.vue';
import AppButton from '@/components/AppButton.vue';
</script>
<style>
.car-shop{
	position: relative;
  min-width: 100px;
  min-height: 350px;
	width: 50rem;
	height: 35rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  padding: 1.9rem 2rem;
}

.table-products{
  overflow-y: scroll;
  position: relative;
  width: 100%;
  height: 85%;
  padding: 0 1rem;
  margin-bottom: 2rem;
}

.table-products::-webkit-scrollbar {
    width: 8px;
    height: 8px;  
    background-color: var(--second-color); 
}

.table-products::-webkit-scrollbar-thumb {
    background: var(--green-color);
    border-radius: 4px;
}

.table-products .car-item{
  margin-bottom: 1rem;
}

.car-shop h2{
  text-align: center;
  margin-bottom: 1.6rem;
}

.car-shop .app-button{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.car-shop .app-button:active{
  transform: scale(0.98);
}

.car-shop .app-button svg{
  width: 1.9rem;
}
</style>