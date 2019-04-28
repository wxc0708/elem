<template>
     <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
        <template scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="食品名称">
                <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="食品ID">
                <span>{{ props.row.item_id }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
                <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="食品评分">
                <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="月销量">
                <span>{{ props.row.rating_count }}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
                <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="餐馆ID">
                <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="餐馆地址">
                <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="食品分类">
                <span>{{ props.row.desc }}</span>
            </el-form-item>
            </el-form>
        </template>
        </el-table-column>
        <el-table-column
        label="食品名称"
        prop="name">
        </el-table-column>
        <el-table-column
        label="食品介绍"
        prop="description">
        </el-table-column>
        <el-table-column
        label="评分"
        prop="rating">
        </el-table-column>  
         <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </template>

<script>
export default {
    data(){
        return{
            tableData:[]
        }
    },
    mounted(){
        this.axios
        .get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined")
        .then(res=>{
            this.tableData=res.data
            console.log(res.data)
        })
    }
}
</script>

<style>

</style>
