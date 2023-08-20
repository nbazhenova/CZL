<template>
    <ul class="pagination">
        <li class="pagination-item">
            <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
                First
            </button>
        </li>

        <li class="pagination-item">
            <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
                Previous
            </button>
        </li>
        <li class="pagination-item" v-for="page in pages" :key="page.name">
            <button type="button" :disabled="page.isDisabled" @click="onClickPage(page.name)">
                {{ page.name }}
            </button>
        </li>
        <li class="pagination-item">
            <button type="button" @click="onClickNextPage" :disabled="isInNextPage">
                Next
            </button>
        </li>

        <li class="pagination-item">
            <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
                Last
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        startPage() {
            if (this.currentPage === 1) {
                return 1;
            }
            if (this.currentPage === this.totalPages) {
                return this.totalPages - this.maxVisibleButtons;
            }
            return this.currentPage - 1;
        },
        pages() {
            const range = [];

            for (
                let i = this.startPage;
                i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
                i++
            ) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                });
            }

            return range;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
        isInNextPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        isPageActive(page) {
            return this.currentPage === page;
        },
        onClickFirstPage() {
            this.$emit('pagechanged', 1);
        },
        onClickPreviousPage() {
            this.$emit('pagechanged', this.currentPage - 1);
        },
        onClickPage(page) {
            this.$emit('pagechanged', page);
        },
        onClickNextPage() {
            this.$emit('pagechanged', this.currentPage + 1);
        },
        onClickLastPage() {
            this.$emit('pagechanged', this.totalPages);
        }
    }
};
</script>
<style>
.pagination {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 7px;
    
    margin: 0;
    padding: 0;
    padding-bottom: 30px;
}
.pagination-item > button {
    background-color: rgba(4, 3, 3, 0.873);
    border-color: transparent;
    border-radius: 5px;

    padding: 10px;
    color: white;
    cursor: pointer;
    transition: 0.3s all;
}
.pagination-item > button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
.pagination-item > button:hover {
    opacity: 0.7;
}
.active {
    background-color: #4AAE9B;
    color: #ffffff;
}
</style>