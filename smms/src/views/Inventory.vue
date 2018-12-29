
//库存管理
<template>
  <el-container id="home">
    <!-- 左侧 -->
    <leftMenu></leftMenu>

    <!-- 右侧 -->
    <el-container id="mainContent">
      <!-- 顶部 -->
      <rightTop></rightTop>
      <!-- 中间 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>库存管理</h3>
          </div>
          <div class="text item">
            <!-- 模板的内容 -->
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column fixed prop="barcode" label="商品条形码" width="150"></el-table-column>
              <el-table-column prop="name" label="商品名称" width="200"></el-table-column>
              <el-table-column prop="price" label="进价(元)" width="120"></el-table-column>
              <el-table-column prop="instorage" label="入库" width="120"></el-table-column>
              <el-table-column prop="outstorage" label="存库" width="220"></el-table-column>
              <el-table-column prop="soldout" label="已售" width="120"></el-table-column>
              <el-table-column fixed="right" label="管理" width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-main>
      <!-- 底部 -->
      <rightBottom></rightBottom>
    </el-container>
  </el-container>
</template>

<script>
//引入组件
import LeftMenu from "../components/leftMenu";
import RightTop from "../components/rightTop";
import RightBottom from "../components/rightBottom";
export default {
  data() {
    return {
      tableData: [
        {
          barcode: "123456789",
          name: "五粮液",
          price: "588",
          instorage: "10000",
          outstorage: "2000",
          soldout:"10000"
        }

      ]
    };
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>





