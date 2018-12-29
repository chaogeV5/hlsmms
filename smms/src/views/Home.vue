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
            <h3>系统信息</h3>
          </div>
          <div class="text item">
            <el-alert
              title="商品总数："
              type="info"
              description="5。已经销售的总金额：800000。库存商品总价：600000"
              show-icon
            ></el-alert>
            <el-alert title="导入数据" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>

            <!-- 一行两列 -->
            <el-row :gutter="40">
              <!-- 左侧 -->
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>销售排行</h3>
                  </div>
                  <!-- 左列表内容 -->
                  <div class="text item">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column prop="productName" label="商品名称"></el-table-column>
                      <el-table-column prop="salesVolume" label="销量"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
              <!-- 右侧 -->
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>缺货商品</h3>
                  </div>
                  <div class="text item">
                    <el-table :data="tableData2" border style="width: 100%">
                      <el-table-column prop="productName" label="商品名称"></el-table-column>
                      <el-table-column prop="inventory" label="库存"></el-table-column>
                      <el-table-column prop="operation" label="操作"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
        { productName: "五粮液", salesVolume: 588 },
        { productName: "贵州茅台", salesVolume: 488 },
        { productName: "山西汾酒", salesVolume: 688 },
        { productName: "北京二锅头", salesVolume: 188 }
      ],

      tableData2: [
        { productName: "剑南春", inventory: "100", operation: "入库" },
        { productName: "泸州老窖", inventory: "200", operation: "入库" }
      ]
    };
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  }
};
</script>





