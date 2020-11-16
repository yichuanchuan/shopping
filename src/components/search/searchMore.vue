<template>
    <div class="search-list">
      <div v-for="(obj,index) in searchList" :key="obj.sid" class="list-item">
        <div v-text="obj.typeName" class=""></div>
        <ul>
          <li @click="setIndex(obj.sid,s_index)" :class="{'active': item.state}" v-for="(item,s_index) in obj.subList" v-text="item.sname"></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "searchMore",
        props: ['searchList'],
        methods: {
          setIndex(typeId,subIndex) {
            let arr = this.searchList;
            if(typeId == 1) {
              arr[0].subList = this.changeIndex(arr[0].subList,subIndex)
              this.$set(this.searchList,0,arr[0])
            }else if(typeId == 2) {
              arr[1].subList = this.changeIndex(arr[1].subList,subIndex)
              this.$set(this.searchList,1,arr[1])
            }else if(typeId == 3) {
              arr[2].subList = this.changeIndex(arr[2].subList,subIndex)
              this.$set(this.searchList,2,arr[2])
            }else if(typeId == 4) {
              arr[3].subList = this.changeIndex(arr[3].subList,subIndex)
              this.$set(this.searchList,3,arr[3])
            }

          },
          changeIndex(arr,subIndex) {
            for( let i = 0 ; i < arr.length ; i++ ) {
              if( i == subIndex) {
                arr[i].state = true;
              }else {
                arr[i].state = false;
              }
            }
            return arr;
          }
        },
        created() {
          let arr = this.searchList;
          for( let i = 0 ; i < arr.length ; i++ ) {
            for( let j = 0 ; j < arr[i].subList.length ; j++ ) {
              let text = arr[i].subList[j];
              let obj = {};
              if( j === 0 ) {
                obj.sname = text;
                obj.state = true;
              }else {
                obj.sname = text;
                obj.state = false;
              }
              arr[i].subList[j] = obj;
            }
          }
        }
    }
</script>

<style scoped lang="less">
  .search-list {
    width: 1200px;
    margin: 0 auto;
  }
  .list-item {
    width: 1200px;
    line-height: 30px;
    height: 30px;
    clear: both;
    font-size: 14px;
    margin: 10px 0;
    &>div {
      float: left;
      width: 5%;
      font-weight: bolder;
      margin: 15px 0;
    }
    &>ul {
      width: 95%;
      float: left;
      list-style-type: none;
      &>li {
        float: left;
        height: 30px;
        padding: 0px 10px;
        margin: 15px 10px;
        cursor: pointer;
      }
      /*&>li:first-child {*/
      /*  cursor: pointer;*/
      /*  border-radius: 20px;*/
      /*  background-color: lightblue;*/
      /*  color: white;*/
      /*}*/
    }
  }
  .active {
      font-size: 14px;
      cursor: pointer;
      border-radius: 10px;
      background-color: lightblue;
      color: white;
  }
</style>
