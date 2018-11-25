<template>
    <div>
        component A
        money {{$store.state.a.money}}
        <button @click="add(2)">增加</button>
        <button @click="reduce">删减</button>
    </div>

</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods:mapActions('a',['add','reduce'])
}
</script>
