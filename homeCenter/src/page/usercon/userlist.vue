<template>
    <div class="all">
      <el-table
        ref="singleTable"
        :data="tableData"
        style="width: 100%">
        <el-table-column
        type="index"
        width="150">
        </el-table-column>
        <el-table-column
        property="registe_time"
        label="注册日期"
        width="150">
        </el-table-column>
        <el-table-column
        property="username"
        label="用户姓名"
        width="150">
        </el-table-column>
        <el-table-column
        property="city"
        label="注册地址">
        </el-table-column>
    </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="1000">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[],
            num:0,
            val:1
        }
    },
    mounted(){
        this.axios
        .get('https://elm.cangdu.org/v1/users/list?offset=0&limit=20')
        .then(res=>{
            this.tableData=res.data
        })
    },
     methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.num=(val-1)*20
        this.axios.get('https://elm.cangdu.org/v1/users/list?offset='+this.num+'&limit=20').then(res=>{
          console.log(res.data);
          this.tableData=res.data
        })
      }
    },
}
</script>

<style scped=>
.all{
    margin-left:1rem; 
}   
</style>
