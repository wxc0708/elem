<template>
  <div class="leader">
    <el-table ref="singleTable" :data="name" highlight-current-row style="width: 100%">
      <el-table-column property="user_name" label="姓名" width="200"></el-table-column>
      <el-table-column property="create_time" label="注册日期" width="200"></el-table-column>
      <el-table-column property="city" width="200" label="地址"></el-table-column>
      <el-table-column property="admin" width="200" label="权限"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="5"
      layout="total, prev, pager, next"
      :total="1000"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: [],
      num: 0,
      val: 1
    };
  },
  mounted() {
    this.axios
      .get("https://elm.cangdu.org/admin/all?offset=0&limit=20")
      .then(res => {
        //   console.log(res)
        this.name = res.data.data;
      });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num = (val - 1) * 20;
      this.axios
        .get("https://elm.cangdu.org/admin/all?offset" + this.num + "&limit=20")
        .then(res => {
        //   console.log(res.data);
          this.name = res.data.data;
        //   console.log(this.name)
        });
    }
  }
};
</script>

<style>
</style>
