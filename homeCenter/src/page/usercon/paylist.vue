<template>
    <div class="paylist">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="用户名">
                    <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="收货地址">
                    <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                    <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺名称">
                    <span>{{ props.row.restaurant_name }}</span>
                </el-form-item>
                <el-form-item label="店铺ID">
                    <span>{{ props.row.restaurant_id }}</span>
                </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="订单 ID"
            prop="id">
            </el-table-column>
            <el-table-column
            label="总价格"
            prop="total_amount">
            </el-table-column>
            <el-table-column
            label="订单状态"
            prop="">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[],
        }
    },
    mounted(){
        this.axios
        .get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined")
        .then(res=>{
            console.log(res.data)
            // for(let i=0;i<res.data.length;i++){

            // }
            this.tableData=res.data
        })
    }
}
</script>

<style>

</style>
