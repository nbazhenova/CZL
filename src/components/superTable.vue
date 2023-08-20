<template>
    <div>
        <div class="table_head">
            <button disabled="true">userId</button>
            <button class="table_head__buttons" @click="this.$store.commit('SORT_BY_ID')">ID</button>
            <button class="table_head__buttons" @click="sortTitle">TITLE</button>
            <button class="table_head__buttons" @click="sortBody">BODY</button>
        </div>
        <pageTable :info="this.$store.getters.POSTS" :page="this.currentPage" />
        <pagination
            :totalPages="10"
            :perPage="10"
            :currentPage="currentPage"
            @pagechanged="onPageChange"
            />
    </div>
</template>
<script>
import pagination from '@/components/paginationOption.vue'
import pageTable from '@/components/pageTable.vue'

export default {
    name: 'superTable',
    data() {
        return {
            currentPage: 1,
            isLettersTitleShorted: false,
            isLettersBodyShorted: false,
        }
    },
    async created() {
        this.$store.dispatch('GET_DATA');
    },
    computed: {

    },
    methods: {
    onPageChange(page) {
      this.currentPage = page;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    },
    sortTitle() {
        if (!this.isLettersTitleShorted) {
            this.$store.commit('SORT_BY_DEC_ABS', 'title');
        } else {
            this.$store.commit('SORT_BY_IMS_ABS', 'title')
        }
        this.isLettersTitleShorted = !this.isLettersTitleShorted
    },
    sortBody() {
        if (!this.isLettersBodyShorted) {
            this.$store.commit('SORT_BY_DEC_ABS', 'body');
        } else {
            this.$store.commit('SORT_BY_IMS_ABS', 'body')
        }
        this.isLettersBodyShorted = !this.isLettersBodyShorted
    },
    },
    components: {
        pagination,
        pageTable
    },
    sortByName() {
        
    }
}
</script>
<style>
    .table_head {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
        padding: 20px 50px;

        background-color: rgba(4, 3, 3, 0.873);

        position: sticky;
        top: 0;
    }
    .table_head > button {
        background-color: rgb(36, 35, 35);
        border-color: transparent;
        border-radius: 5px;
        color: white;
        padding: 10px;

        cursor: pointer;
        transition: 0.3s all;
    }
    .table_head > button:hover {
        opacity: 0.8;
    }
    .table_head > button:disabled {
        color: gray;
        cursor:not-allowed;
    }
    .table_head__buttons {
        position: relative;
    }
    .table_head__buttons::before {
        content: url('/src/assets/sort.svg');
        position: absolute;
        top: 8px;
        right: 20px;
    }
</style>