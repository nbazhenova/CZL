<template>
    <div class="table__container">
        <div class="table__content" v-for="item in info" :key="item.index">
            <div v-if="item.id <= this.page + '0' && item.id >= this.page + '1' - 10" class="table__col">
                <div>{{item.userId}}</div>
                <div>{{item.id}}</div>
                <div>{{item.title}}</div>
                <div>{{item.body}}</div>
            </div>
        </div>
    </div>
    </template>

<script>
export default {
    name: 'pageTable',
    props: {
        info: {
            type: Object,
            required: true
        },
        page: {
            type: Number,
            required: true
        }
    },
    computed: {
    }
}
</script>
<style>
.table__container {
    border: 1px solid rgba(151, 147, 147, 0.196);
        border-radius: 15px;
        margin: 50px;
}
    .table__col {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
        padding: 10px 0;
    }
    .table__col > div {
        font-size: 14px;
        padding: 15px;
    }
</style>