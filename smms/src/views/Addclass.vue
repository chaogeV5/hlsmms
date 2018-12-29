
//添加分类
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
            <!-- 模板的内容 -->
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <!--  -->
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
              label-position="top"
            >

              <el-form-item label="分类名称：" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                  <el-option label="烟酒" value="烟酒"></el-option>
                  <el-option label="食品" value="食品"></el-option>
                  <el-option label="孕婴" value="孕婴"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
              </el-form-item>
            </el-form>
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
      options: [
        {
          value: "选项1",
          label: "五粮液"
        },
        {
          value: "选项2",
          label: "贵州茅台"
        },
        {
          value: "选项3",
          label: "泸州老窖"
        },
        {
          value: "选项4",
          label: "山西汾酒"
        },
        {
          value: "选项5",
          label: "剑南春"
        }
      ],
      value: "",

      //数据对象
      ruleForm2: {
        pass: "",
        username: "",
        passCheck: "",
        usergroup: ""
      },
      //验证规则
      rules2: {

        usergroup: [
          { required: true, trigger: "change", message: "请选择用户组" }
        ]
      }
    };
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    //提交表单的方法
    submitForm(formName) {
      //调用组件的验证方法提交表单是验证
      this.$refs[formName].validate(valid => {
        //valid参数表示验证的结果，true表示验证通过，false验证失败
        if (valid) {
          //alert('√ 表单验证成功!');
          //发起ajax请求去后端做数据库的验证
          //location.href="/";
          this.$router.push("/"); //使用路由对象的push实现跳转
        } else {
          //alert("× 表单验证失败!");
          return false;
        }
      });
    },
    //重置表单的方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>





