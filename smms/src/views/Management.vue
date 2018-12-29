
// 分类管理
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
            <h3>分类管理</h3>
          </div>
          <div class="text item">
        <!-- 模板的内容 -->
         <el-table :data="tableData" style="width: 100%">
          
              <el-table-column label="分类名称" width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.username }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="username-wrapper">
                      <el-tag size="medium">{{ scope.row.username }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i> 编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  ><i class="el-icon-delete"></i> 删除</el-button>
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
          username: "王小虎",
          address: "上海市普陀区金沙江路 555 弄"
        },
        {
          username: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          username: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          username: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>





